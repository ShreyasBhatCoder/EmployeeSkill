import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "test",
  authDomain: "test",
  projectId: "test",
  storageBucket: "test",
  messagingSenderId: "test",
  appId: "test",
  measurementId: "test",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export const db = firebase.firestore();

export default firebase;
