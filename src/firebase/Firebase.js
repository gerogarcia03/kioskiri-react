import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyBJfVp8eV_FJKrO3_RmaxHU1wNEudhCa04",
  authDomain: "kioskiri-e07d0.firebaseapp.com",
  databaseURL: "https://kioskiri-e07d0-default-rtdb.firebaseio.com",
  projectId: "kioskiri-e07d0",
  storageBucket: "kioskiri-e07d0.appspot.com",
  messagingSenderId: "9464383318",
  appId: "1:9464383318:web:286d1a19ccb191fe9a38f7",
  measurementId: "G-F4PTY2VV7J"
};

const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app)
export const db = getFirestore(app)