import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUtyuwifIwJBOvj9hz_K0PIVP1LXW7fpk",
  authDomain: "crwn-clothing-db-4be39.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-4be39.firebaseio.com",
  projectId: "crwn-clothing-db-4be39",
  storageBucket: "",
  messagingSenderId: "341482300804",
  appId: "1:341482300804:web:88b0c8a9616efeb3f129d1"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  //console.log(fireStore.doc("user/laksdjaksjdhfga34"));

  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  //   console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
