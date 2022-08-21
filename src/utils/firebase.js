// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIgWZnQnNQxpgPMs52-YHxxL6J7FDHU-g",
  authDomain: "hostreel.firebaseapp.com",
  projectId: "hostreel",
  storageBucket: "hostreel.appspot.com",
  messagingSenderId: "648543990230",
  appId: "1:648543990230:web:ba8f2e8e858b5ee1a07477"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export default app;