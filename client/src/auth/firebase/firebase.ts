import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  updateProfile,
  updateCurrentUser,
} from "firebase/auth";
import { createDbUser } from "src/api/v1";
import type { CreateUserCB, SignInCB } from "../types";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAOkmeiUE96UKSy-Io51pDLFCHUEQflrLU",
  authDomain: "lagalt-app-case.firebaseapp.com",
  projectId: "lagalt-app-case",
  storageBucket: "lagalt-app-case.appspot.com",
  messagingSenderId: "325474303253",
  appId: "1:325474303253:web:8c5dc4b73b53723318fd1c",
  measurementId: "G-LD3S9ZSC4C",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence,
});

export const signInCB: SignInCB = (auth, setAuthState) => {
  return ({ email, password }) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() =>
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
          user.getIdToken().then((token) => {
            setAuthState({ token, username: user.displayName || null });
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

export const createUserCB: CreateUserCB = (auth, setAuthState) => {
  return ({ email, password, username }) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        if (!user) throw new Error();

        updateProfile(user, { displayName: username, photoURL: "" });

        createDbUser({
          username,
          email,
          uid: user.uid,
        });

        user.getIdToken().then((token) => {
          setAuthState({ token, username: user.displayName || null });
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

// const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);
