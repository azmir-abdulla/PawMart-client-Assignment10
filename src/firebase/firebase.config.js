// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJfEhhYpXc9zvbLx_H5pAB1HRBaPPiIgA",
  authDomain: "kutto-pet-mart.firebaseapp.com",
  projectId: "kutto-pet-mart",
  storageBucket: "kutto-pet-mart.firebasestorage.app",
  messagingSenderId: "636191007020",
  appId: "1:636191007020:web:0c4d8161883a1c73b14c89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;