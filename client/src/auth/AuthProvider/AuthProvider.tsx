import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IAuthProvider, IAuthContext, IsignIn } from "./types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";

const AuthContext = createContext<IAuthContext>(null!);

interface IAuthProviderState {
  signedIn: boolean;
  uid?: string;
}

const firebaseApp = initializeApp(firebaseConfig);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthProviderState>({
    signedIn: false,
  });

  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setAuthState({
          signedIn: true,
          uid: user.uid,
        });
      } else {
        setAuthState({ signedIn: false });
      }
    });

    return unsubscribe();
  }, []);

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     setAuthState({
  //       signedIn: true,
  //       uid: user.uid,
  //     });
  //   } else {
  //     setAuthState({ signedIn: false });
  //   }
  // });

  const signIn = useCallback(({ email, password }: IsignIn) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user: { email, uid } }) => {
        if (!email) throw new Error();

        setAuthState({
          signedIn: true,
          uid,
        });

        // fetch userData

        console.log(email);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        // handle errors
      });
  }, []);

  const signOut = useCallback(() => {
    auth.signOut();

    setAuthState({
      signedIn: false,
    });
  }, []);

  const createUser = useCallback(
    (email: string, password: string, username: string) => {
      createUserWithEmailAndPassword(auth, email, password)
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
      auth,
      authState,
    }),
    []
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
