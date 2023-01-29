import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZU0QEh11hW2yKVoCuReRPVThbe7QqeYU",
  authDomain: "hackathon-62510.firebaseapp.com",
  projectId: "hackathon-62510",
  storageBucket: "hackathon-62510.appspot.com",
  messagingSenderId: "374322364903",
  appId: "1:374322364903:web:c36c26eb4e103f55633d42",
  measurementId: "G-BTNHXYL33S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;