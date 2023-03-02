import {
  Auth,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createDbUser } from "src/api/v1";
import { queryClient } from "src/index";
import type { ICreateFirebaseUser, SignInCB } from "../types";

export const signInCB: SignInCB = (auth: Auth, setAuthState: any) => {
  return ({ email, password }) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() =>
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
          user.getIdToken().then((token) => {
            // queryClient.setQueryData(["auth"], () => "blabla");
            setAuthState({ token, username: user.displayName || "" });
          });
        })
      )
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        // handle errors
      });
  };
};

export const createFirebaseUserCB = (
  auth: Auth,
  setAuthState: any
): (({ email, password, username }: ICreateFirebaseUser) => void) => {
  return ({ email, password, username }) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        if (!user) throw new Error();

        auth.updateCurrentUser({
          ...user,
          displayName: username,
        });

        createDbUser({
          username,
          email,
          uid: user.uid,
        });

        user.getIdToken().then((token) => {
          setAuthState({ token, username: user.displayName || "" });
        });

        // do something
      })
      .catch((err) => {
        auth.signOut();

        // delete newly created user from db

        console.log(err.code);
        console.log(err.message);
      });
};
