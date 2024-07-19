// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-9JwuzWauFV5WtMid2fOgwqXoylly8gU",
  authDomain: "ai-travel-planner-404.firebaseapp.com",
  projectId: "ai-travel-planner-404",
  storageBucket: "ai-travel-planner-404.appspot.com",
  messagingSenderId: "182509045783",
  appId: "1:182509045783:web:54137460ccc9e362a03452",
  measurementId: "G-NS81BF6EEY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
