
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-kvCJLOr9IaHAqeSP4I3E25aMcD-OvxA",
  authDomain: "reactlinks-8bc56.firebaseapp.com",
  projectId: "reactlinks-8bc56",
  storageBucket: "reactlinks-8bc56.firebasestorage.app",
  messagingSenderId: "605791335048",
  appId: "1:605791335048:web:ab5ee8d8f9ad15355d653d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db}