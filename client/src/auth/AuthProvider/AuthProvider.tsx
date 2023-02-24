import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  IAuthProvider,
  IAuthContext,
  IsignIn,
  IAuthProviderState,
} from "./types";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  initializeAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";

const AuthContext = createContext<IAuthContext>(null!);

const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence,
});

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthProviderState>({
    signedIn: false,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      user
        ? setAuthState({ signedIn: true, uid: user.uid })
        : setAuthState({ signedIn: false });
    });
  }, []);

  const signIn = useCallback(({ email, password }: IsignIn) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() =>
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
          if (!user.email) throw new Error();

          setAuthState({
            signedIn: true,
            uid: user.uid,
          });

          // fetch userData

          console.log(email);
        })
      )
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        // handle errors
      });
  }, []);

  const signOut = useCallback(() => {
    auth.signOut();
  }, []);

  const createUser = useCallback(
    async (email: string, password: string, username: string) => {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(({ user: { email: returnedEmail } }) => {
          console.log(returnedEmail);

          if (!returnedEmail) throw new Error();

          // do something
        })
        .catch((err) => {
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
      createUser,
      authState,
    }),
    [authState, setAuthState]
  );

  return <AuthContext.Provider value={contextValue} children={children} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
