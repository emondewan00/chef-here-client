// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "chef-shef.firebaseapp.com",
  projectId: "chef-shef",
  storageBucket: "chef-shef.appspot.com",
  messagingSenderId: "387447831642",
  appId: "1:387447831642:web:80c5b32def876fdefdec63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
