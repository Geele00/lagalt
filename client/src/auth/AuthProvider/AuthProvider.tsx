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
import { getAuth } from "firebase/auth";
import { firebaseApp } from "src/index";

const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthProviderState>({
    loggedIn: false,
  });

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
    }),
    [authState]
  );

  return <AuthContext.Provider value={contextValue} children={children} />;
};

export const useUser = () => {
  return useContext(AuthContext);
};
