import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH8p0_m6D3F0sX1oXxqlqBcY3Z703yyiY",
    authDomain: "react-olx-clone-a0170.firebaseapp.com",
    projectId: "react-olx-clone-a0170",
    storageBucket: "react-olx-clone-a0170.appspot.com",
    messagingSenderId: "477472309634",
    appId: "1:477472309634:web:e7023f3e14b8f1cde90f9b",
    measurementId: "G-YHZN6XF1FE"
  };

  export default firebase.initializeApp(firebaseConfig)