// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJxh_2Hww4kkmyluddLvt8KLkMHPOjy30",
  authDomain: "fir-todo-488e9.firebaseapp.com",
  projectId: "fir-todo-488e9",
  storageBucket: "fir-todo-488e9.appspot.com",
  messagingSenderId: "617240707344",
  appId: "1:617240707344:web:942996c5da6258a37c2595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export  {app, db};