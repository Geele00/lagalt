import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { IAuthProvider, IAuthContext, IAuthState, SignIn } from "./types";
import { auth } from "./firebase/firebase";
import { signInAnonymously } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { defaultOptions } from "src/api/v1/defaults";

const AuthContext = createContext<IAuthContext>(null!);

const initialAuthState: IAuthState = {
  token: null,
  username: null,
  type: null,
};

export interface AuthStateOpts {
  username: string | null;
  type: "signin" | "signout" | "reset";
}

export const authReducer = (authState: IAuthState, action: AuthStateOpts) => {
  const { username, type } = action;

  switch (type) {
    case "signin":
      signInAnonymously(auth).then(async ({ user }) => {
        return await user.getIdToken().then((token) => {
          return { token, username, type };
        });
      });

    case "signout":
      const t = auth.signOut().then(async () => {
        return await signInAnonymously(auth).then(async ({ user }) => {
          return await user.getIdToken().then((token) => {
            return { token, username: null, type: "anon" };
          });
        });
      });

    default:
      return initialAuthState;
  }
};

export const AuthProvider = ({ children, queryClient }: IAuthProvider) => {
  const [authState2, changeAuth] = useReducer(authReducer, initialAuthState);

  const [authState, setAuthState] = useState<IAuthState>({
    token: null,
    username: null,
    type: null,
  });

  // useEffect(() => {
  // queryClient.setQueryDefaults(["auth"], {
  //   queryFn: () => {
  //     return queryClient.getQueryData(["auth"]) || null;
  //   },
  //   staleTime: 0,
  //   retry: 1,
  //   refetchOnWindowFocus: false,
  //   refetchOnMount: false,
  //   refetchOnReconnect: false,
  // });
  // }, [authState]);

  const signIn: SignIn = (token, username, type = "user") => {
    setAuthState({ token, username, type });
    // queryClient.setQueryData(["auth"], { token, username, type });
    // queryClient.invalidateQueries(["auth"]);
  };

  const anonSignIn = () => {
    signInAnonymously(auth).then(({ user }) => {
      user.getIdToken().then((token) => {
        // queryClient.setQueryData(["auth"], {
        //   token,
        //   username: null,
        //   type: "anon",
        // });
        // queryClient.invalidateQueries(["auth"]);

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
          // queryClient.setQueryData(["auth"], {
          //   token,
          //   username: user.displayName,
          //   type: "user",
          // });
          // queryClient.invalidateQueries(["auth"]);
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
