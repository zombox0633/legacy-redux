// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz3XT5lZs-Q0BAUrEH3xjh_hbF_qj3K9E",
  authDomain: "testtodolist-706c6.firebaseapp.com",
  projectId: "testtodolist-706c6",
  storageBucket: "testtodolist-706c6.appspot.com",
  messagingSenderId: "452592849684",
  appId: "1:452592849684:web:ff5e16006c9fab9531a801",
  measurementId: "G-W0GKGWP7KZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
