// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWGMuZ4mYPe4kkH82TqHfX1erfiS3L794",
  authDomain: "doll-fairy-world-react-crud.firebaseapp.com",
  projectId: "doll-fairy-world-react-crud",
  storageBucket: "doll-fairy-world-react-crud.appspot.com",
  messagingSenderId: "109238904354",
  appId: "1:109238904354:web:968f2b52d0cde63b6d4c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;