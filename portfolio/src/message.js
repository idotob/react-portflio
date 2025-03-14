// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
require('dotenv').config()
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "portfolio-leads-9a13b.firebaseapp.com",
  databaseURL: "https://portfolio-leads-9a13b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-leads-9a13b",
  storageBucket: "portfolio-leads-9a13b.firebasestorage.app",
  messagingSenderId: "84529537926",
  appId: "1:84529537926:web:2b22a21da64f85ab404207",
  measurementId: "G-DMTXZNX6NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }