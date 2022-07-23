// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import {GoogleAuthProvider,
 getAuth
}from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHwQYE9oJpYhGoHSZnc48BTVx5mfdUGp4",
    authDomain: "facebook-clone-4f85c.firebaseapp.com",
    projectId: "facebook-clone-4f85c",
    storageBucket: "facebook-clone-4f85c.appspot.com",
    messagingSenderId: "416674531018",
    appId: "1:416674531018:web:40013556e68ea311521633",
    measurementId: "G-CL8KBEH1FN"
  };

  const firebaseApp = initializeApp(firebaseConfig);;
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export {auth, provider};
  export default db;