// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfYC-Svr3bJ7HD299KMnYwVWJVOyVjXZE",
  authDomain: "todolist-neme.firebaseapp.com",
  projectId: "todolist-neme",
  storageBucket: "todolist-neme.appspot.com",
  messagingSenderId: "758183855791",
  appId: "1:758183855791:web:e4d10da0faf9e53ceeb65a",
  measurementId: "G-YGN14MRDYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);