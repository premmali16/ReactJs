// Firebase initialization
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase web app config
const firebaseConfig = {
  apiKey: "AIzaSyA6-GQmhmmVsj8_NDphoQmFgFtKgCNsDJw",
  authDomain: "student-716ab.firebaseapp.com",
  projectId: "student-716ab",
  storageBucket: "student-716ab.appspot.com",
  messagingSenderId: "790959082985",
  appId: "1:790959082985:web:d213c7f7f2de6f58bf0f78"
};

let app;
let auth;
let googleProvider;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Firebase initialization error:", error);
  throw error;
}

export { auth, googleProvider };

export default app;
