import { initializeApp } from "firebase/app";
import { browserLocalPersistence, initializeAuth } from "firebase/auth";

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

console.log(123);

const firebaseApp = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence,
});

// const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);
