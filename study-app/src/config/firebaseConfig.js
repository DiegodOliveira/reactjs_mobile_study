// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import{
  FIREBASE_API_KEY,
FIREBASE_AUTH_DOMAIN,
FIREBASE_PROJECT_ID,
FIREBASE_STORAGE_BUCKET,
FIREBASE_MESSAGING_SENDER_ID,
FIREBASE_APP_ID
} from '@env'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app)

export const db = getFirestore(app)

