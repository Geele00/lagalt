// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
