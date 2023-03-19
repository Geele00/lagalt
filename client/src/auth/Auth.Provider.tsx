import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IAuthProvider, IAuthContext, IAuthState, SignIn } from "./Auth.types";
import { auth } from "./firebase";
import { signInAnonymously } from "firebase/auth";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "src/routes/router";

const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider = ({ queryClient }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthState>({
    token: null,
    username: null,
    signedIn: false,
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

  const signIn: SignIn = (token, username) => {
    setAuthState({ token, username, signedIn: true });
    // queryClient.setQueryData(["auth"], { token, username  });
    // queryClient.invalidateQueries(["auth"]);
  };

  const anonSignIn = () => {
    signInAnonymously(auth).then(({ user }) => {
      user.getIdToken().then((token) => {
        // queryClient.setQueryData(["auth"], {
        //   token,
        //   username: "anon",
        // });
        // queryClient.invalidateQueries(["auth"]);

        setAuthState({ token, username: "anon", signedIn: false });
      });
    });
  };

  // this might break without connection to firebase
  const signOut = useCallback(() => {
    auth.signOut().then(() => {
      anonSignIn();
    });
  }, [auth]);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (!!user) {
        user.getIdToken().then((token) => {
          setAuthState({ token, username: user.displayName, signedIn: true });
          // queryClient.setQueryData(["auth"], {
          //   token,
          //   username: user.displayName,
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

  return (
    <AuthContext.Provider value={contextValue}>
      <RouterProvider router={router} context={{ queryClient, authState }} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
