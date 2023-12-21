// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUZHRTgxYHAmN6W5xOUGPY-6lb8kd9uQU",
  authDomain: "task-management-system-9daf2.firebaseapp.com",
  projectId: "task-management-system-9daf2",
  storageBucket: "task-management-system-9daf2.appspot.com",
  messagingSenderId: "327379427962",
  appId: "1:327379427962:web:6bb314465a91a7b28111c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;