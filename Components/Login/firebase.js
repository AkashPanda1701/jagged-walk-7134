import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKNVNLqfGWQwEMc1-XkoJ6aZTOj1ihCbI",
  authDomain: "newproject-345219.firebaseapp.com",
  projectId: "newproject-345219",
  storageBucket: "newproject-345219.appspot.com",
  messagingSenderId: "498703008141",
  appId: "1:498703008141:web:000bd8d939d0de34be7dc4",
  measurementId: "G-WJLDY616KE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
