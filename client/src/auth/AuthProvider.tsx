import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { IAuthProvider, IAuthContext, IsignIn, IAuthState } from "./types";
import { createDbUser } from "src/api/v1/users";
import { auth } from "./firebase";

const AuthContext = createContext<IAuthContext>(null!);

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
    (email: string, password: string, username: string) => {
      createUserWithEmailAndPassword(auth, email, password)
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

          user.getIdToken().then((token) => {
            setAuthState({ token, username: user.displayName || "" });
          });

          // do something
        })
        .catch((err) => {
          auth.signOut();

          // delete newly created user from db

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
