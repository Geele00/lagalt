import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IAuthProvider, IAuthContext, IAuthState, SignIn } from "./types";
import { auth } from "./firebase/firebase";
import { signInAnonymously } from "firebase/auth";

const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthState>({
    token: null,
    username: null,
    type: null,
  });

  const signIn: SignIn = (token, username, type = "user") => {
    setAuthState({ token, username, type });
  };

  const anonSignIn = () => {
    signInAnonymously(auth).then(({ user }) => {
      user.getIdToken().then((token) => {
        setAuthState({ token, username: null, type: "anon" });
      });
    });
  };

  const signOut = useCallback(() => {
    auth.signOut().then(() => {
      anonSignIn();
    });
  }, [auth]);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user && !user.isAnonymous) {
        console.log(user.uid);
        user.getIdToken().then((token) => {
          setAuthState({ token, username: user.displayName, type: "user" });
        });
      } else {
        anonSignIn();
      }

      return unsub;
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      signIn,
      signOut,
      authState,
    }),
    [authState]
  );

  return <AuthContext.Provider value={contextValue} children={children} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
