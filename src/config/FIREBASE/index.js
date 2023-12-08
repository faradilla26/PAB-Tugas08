import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCTMjjQh_R0l98CO455wEzpoAJlB-oZL0s",
  authDomain: "tebakk-c5c42.firebaseapp.com",
  projectId: "tebakk-c5c42",
  storageBucket: "tebakk-c5c42.appspot.com",
  messagingSenderId: "598073618074",
  appId: "1:598073618074:web:4f36f6256e4ab654f3b923"
});

const FIREBASE = firebase;

export default FIREBASE;