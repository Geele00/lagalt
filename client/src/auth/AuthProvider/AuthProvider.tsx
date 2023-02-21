import { useCallback, useMemo, useState } from "react";
import { AuthContext } from "src/index";
import { IAuthProviderState, IAuthProvider, IlogIn } from "./types";

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthProviderState>({
    loggedIn: false,
  });

  const logIn = useCallback(
    ({ username, uuid }: IlogIn) =>
      setAuthState({ username, uuid, loggedIn: true }),
    [setAuthState]
  );

  const logOut = useCallback(() => {
    setAuthState({ loggedIn: false });
  }, [setAuthState]);

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
