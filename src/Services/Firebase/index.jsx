// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4TNrHg2uyhZQtCwjT2iyP2wYVbWDg_uU",
  authDomain: "nalapasteles.firebaseapp.com",
  projectId: "nalapasteles",
  storageBucket: "nalapasteles.appspot.com",
  messagingSenderId: "364936055855",
  appId: "1:364936055855:web:a844ec21f0290cdf980ada",
  measurementId: "G-5QSVX9ZTFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
