// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvjObl1e7rfg435k-u6LCuaDJKUcCgOhU",
  authDomain: "my-project-1607f.firebaseapp.com",
  projectId: "my-project-1607f",
  storageBucket: "my-project-1607f.appspot.com",
  messagingSenderId: "1063686759770",
  appId: "1:1063686759770:web:079b365f9ab1530a3a3f63",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig).firestore();

export default app;