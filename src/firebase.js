// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBn6cM7abcxlhIfFvA9IQIAqocXPx6kEw8",
    authDomain: "clone-ae0b8.firebaseapp.com",
    projectId: "clone-ae0b8",
    storageBucket: "clone-ae0b8.appspot.com",
    messagingSenderId: "578328873367",
    appId: "1:578328873367:web:0d52fb09872122e1429cd2",
    measurementId: "G-B08JTEGX8R"
  };

const FirebaseApp = firebase.initializeApp(firebaseConfig);
 
const db = FirebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};