// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-fc6e5.firebaseapp.com',
  projectId: 'mern-estate-fc6e5',
  storageBucket: 'mern-estate-fc6e5.appspot.com',
  messagingSenderId: '885799268543',
  appId: '1:885799268543:web:51a3d781810d5212d9160a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
