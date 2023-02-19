import { useMemo, useState } from "react";
import { AuthContext } from "src/index";
import { IAuthProviderState, IAuthProvider, IlogIn } from "./types";

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthProviderState>({
    loggedIn: false,
  });

  const logIn = ({ username, uuid }: IlogIn) => {
    setAuthState({ username, uuid, loggedIn: true });
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
