import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqesVEEF5eHtvUzfi2aUQc9QDfBJdas5w",
  authDomain: "chat-app-d0019.firebaseapp.com",
  projectId: "chat-app-d0019",
  storageBucket: "chat-app-d0019.appspot.com",
  messagingSenderId: "868020380146",
  appId: "1:868020380146:web:09cab0308f662405410b6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

