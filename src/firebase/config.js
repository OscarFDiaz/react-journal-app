// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCOJQLDUXDiPfwHd6EYUhNSk2oY-KExN0k',
  authDomain: 'journal-app-52cc9.firebaseapp.com',
  projectId: 'journal-app-52cc9',
  storageBucket: 'journal-app-52cc9.appspot.com',
  messagingSenderId: '345152035178',
  appId: '1:345152035178:web:206e8ecba1a98f57c02d13',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
