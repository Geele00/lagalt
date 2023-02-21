import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  IAuthProviderState,
  IAuthProvider,
  IlogIn,
  IAuthContext,
} from "./types";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/auth/firebase";

const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthProviderState>({
    loggedIn: false,
  });

  const firebaseApp = initializeApp(firebaseConfig);

  const logIn = useCallback(
    ({ email }: IlogIn) => setAuthState({ email, loggedIn: true }),
    [setAuthState]
  );

  const logOut = useCallback(() => {
    setAuthState({ loggedIn: false });
  }, [setAuthState]);

  // auth.onAuthStateChanged(user => {
  //   user ? logIn(user.email) : logOut();
  // })

  const contextValue = useMemo(
    () => ({
      ...authState,
      logIn,
      logOut,
      firebaseApp,
    }),
    [authState]
  );

  return <AuthContext.Provider value={contextValue} children={children} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
