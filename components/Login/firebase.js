import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApevtMOqB2f8YaZWJUOLm4wqh4eLQ6ylM",
  authDomain: "jagged-walk-7134.firebaseapp.com",
  projectId: "jagged-walk-7134",
  storageBucket: "jagged-walk-7134.appspot.com",
  messagingSenderId: "638333698830",
  appId: "1:638333698830:web:19962c501e46ea878d8d5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
