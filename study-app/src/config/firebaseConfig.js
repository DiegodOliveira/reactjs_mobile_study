// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtsBYjSiCOiu1bsaKUIFljWw0Cef6e8CY",
  authDomain: "study-app-2024-21019.firebaseapp.com",
  projectId: "study-app-2024-21019",
  storageBucket: "study-app-2024-21019.firebasestorage.app",
  messagingSenderId: "844907188439",
  appId: "1:844907188439:web:34c4a602f07f89cafee092"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app)

export const db = getFirestore(app)

