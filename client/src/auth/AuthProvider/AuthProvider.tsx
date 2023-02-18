import { useMemo, useState } from "react";
import { AuthContext } from "src/index";
import { IAuthProviderState, IAuthProvider } from "./types";

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthProviderState>({
    username: "",
    loggedIn: false,
  });

  const logIn = (username: string) => {
    setAuthState({ username: username, loggedIn: true });
  };

  const logOut = () => {
    setAuthState({ loggedIn: false });
  };

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
