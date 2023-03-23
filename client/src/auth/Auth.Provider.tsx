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

const AuthContext = createContext<IAuthContext>(null!);

const initialAuthState = {
  token: null,
  username: null,
  signedIn: false,
};

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthState>(initialAuthState);

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

  // const anonSignIn = () => {
  //   signInAnonymously(auth).then(({ user }) => {
  //     user.getIdToken().then((token) => {
  //       // queryClient.setQueryData(["auth"], {
  //       //   token,
  //       //   username: "anon",
  //       // });
  //       // queryClient.invalidateQueries(["auth"]);
  //
  //       setAuthState({ token, username: "anon", signedIn: false });
  //     });
  //   });
  // };

  // this might break without connection to firebase
  const signOut = () => {
    if (authState.signedIn)
      auth.signOut().then(() => {
        setAuthState(initialAuthState);
        // anonSignIn();
      });
  };

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
      }
      // else {
      //   anonSignIn();
      // }

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
