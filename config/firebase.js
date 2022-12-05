// firebase config key setup
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmLBPrp2Cb2oTtIcDT7Aapi4KTdNmLZ5s",
  authDomain: "notes-app-1c6cb.firebaseapp.com",
  projectId: "notes-app-1c6cb",
  storageBucket: "notes-app-1c6cb.appspot.com",
  messagingSenderId: "746478725765",
  appId: "1:746478725765:web:97ae572f90c4101a9a57ec",
  measurementId: "G-TYFQ1MP3RM",
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };