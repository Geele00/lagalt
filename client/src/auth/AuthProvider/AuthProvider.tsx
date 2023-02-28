import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IAuthProvider, IAuthContext, IsignIn, IAuthState } from "./types";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  initializeAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { createDbUser } from "src/api/v1/users";

const AuthContext = createContext<IAuthContext>(null!);

const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence,
});

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthState>({
    token: "",
    username: "",
  });

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user)
        user.getIdToken().then((token) => {
          setAuthState({ token, username: user.displayName || "" });
        });

      return unsub;
    });
  }, []);

  const signIn = useCallback(
    ({ email, password }: IsignIn) => {
      setPersistence(auth, browserLocalPersistence)
        .then(() =>
          signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
            user.getIdToken().then((token) => {
              setAuthState({ token, username: user.displayName || "" });
            });
          })
        )
        .catch((err) => {
          console.log(err.code);
          console.log(err.message);
          // handle errors
        });
    },
    [auth]
  );

  const signOut = useCallback(() => {
    auth.signOut();
    setAuthState({ token: "", username: "" });
  }, [auth]);

  const createFirebaseUser = useCallback(
    async (email: string, password: string, username: string) => {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          if (!user) throw new Error();

          auth.updateCurrentUser({
            ...user,
            displayName: username,
          });

          createDbUser({
            username,
            email,
            uid: user.uid,
          });

          // setAuthState({ token });

          // do something
        })
        .catch((err) => {
          // TODO: Handle errors properly
          console.log(err.code);
          console.log(err.message);
        });
    },
    [auth]
  );

  const contextValue = useMemo(
    () => ({
      signIn,
      signOut,
      createFirebaseUser,
      authState,
    }),
    [authState, setAuthState]
  );

  return <AuthContext.Provider value={contextValue} children={children} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
