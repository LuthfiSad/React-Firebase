// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq1h4HKcKQKO1T26u6V30RKO-l2aPsRxY",
  authDomain: "simple-notes-firebase-15018.firebaseapp.com",
  projectId: "simple-notes-firebase-15018",
  storageBucket: "simple-notes-firebase-15018.appspot.com",
  messagingSenderId: "838459106535",
  appId: "1:838459106535:web:63d667c099048afac56e42",
  measurementId: "G-PL7M16H6S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;