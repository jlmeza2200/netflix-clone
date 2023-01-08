// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4ql5kTM62Vz-NJFuP51hlERZXGWkHMt4",
    authDomain: "netflix-clone-ef123.firebaseapp.com",
    projectId: "netflix-clone-ef123",
    storageBucket: "netflix-clone-ef123.appspot.com",
    messagingSenderId: "877495626108",
    appId: "1:877495626108:web:46c89fb7b3d11597451cf9"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
