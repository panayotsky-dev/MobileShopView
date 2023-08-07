// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8GoqzsCZJmAuGocxZJI92Ih5Ob4GzdXg",
  authDomain: "test1-e5bd1.firebaseapp.com",
  projectId: "test1-e5bd1",
  storageBucket: "test1-e5bd1.appspot.com",
  messagingSenderId: "926376613860",
  appId: "1:926376613860:web:5a1de08ae14fbf695559f1",
  measurementId: "G-3395VVE4ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);