// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDfbmlQHdR7RCd4HkefgWwz62QWl877fY0",
  authDomain: "myblog-8dfec.firebaseapp.com",
  projectId: "myblog-8dfec",
  storageBucket: "myblog-8dfec.appspot.com",
  messagingSenderId: "13694522005",
  appId: "1:13694522005:web:a5c494c4cf62d5b97fc19c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();