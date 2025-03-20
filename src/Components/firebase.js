// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBucC4bTDe9cNQ6lThk1iwiPe_MbwstkwY",
  authDomain: "vcm-app-ad5bc.firebaseapp.com",
  projectId: "vcm-app-ad5bc",
  storageBucket: "vcm-app-ad5bc.firebasestorage.app",
  messagingSenderId: "90115345994",
  appId: "1:90115345994:web:772658eb7f2b43e27820b3",
  measurementId: "G-LS8BFCJKZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
