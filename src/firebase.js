// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyASn6Fk__B6_yJm2KYpP7OGAefeOUCYZbY",
  authDomain: "portfolio-9efdd.firebaseapp.com",
  projectId: "portfolio-9efdd",
  storageBucket: "portfolio-9efdd.appspot.com",
  messagingSenderId: "346644245431",
  appId: "1:346644245431:web:67139970f53ce460901632",
  measurementId: "G-9LM90SN444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);