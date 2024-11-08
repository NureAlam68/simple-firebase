// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhnwXDQYhLQMNuE9al2h22uV2hIgMxexI",
  authDomain: "simple-firebase-2-e5c6d.firebaseapp.com",
  projectId: "simple-firebase-2-e5c6d",
  storageBucket: "simple-firebase-2-e5c6d.firebasestorage.app",
  messagingSenderId: "519159003329",
  appId: "1:519159003329:web:8ad3b55b8bf65fce4bbc40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;