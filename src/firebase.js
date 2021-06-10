// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDGhdlZd2Qskt3NFn3aWLu34PrUkmhIns4",
  authDomain: "full-auth-9bf6a.firebaseapp.com",
  projectId: "full-auth-9bf6a",
  storageBucket: "full-auth-9bf6a.appspot.com",
  messagingSenderId: "554832065297",
  appId: "1:554832065297:web:f8fc41769c5223bca692b0",
  measurementId: "G-0LT88ESSVY"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};


