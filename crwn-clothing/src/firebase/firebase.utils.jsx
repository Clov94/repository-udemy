import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5fEldvi2a5V4LpCitAXGwbMHwUk7ZhQQ",
  authDomain: "crwn-clothing-db-507d4.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-507d4.firebaseio.com",
  projectId: "crwn-clothing-db-507d4",
  storageBucket: "",
  messagingSenderId: "836683422069",
  appId: "1:836683422069:web:a5244c4abd7d345e6e9b3c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
