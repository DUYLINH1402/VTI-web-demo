// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSRdcAb7Q4eCdJXitrPU8GgonuZxiZ-T0",
  authDomain: "vti-web-demo.firebaseapp.com",
  projectId: "vti-web-demo",
  storageBucket: "vti-web-demo.appspot.com",
  messagingSenderId: "289146144400",
  appId: "1:289146144400:web:6fb2f60400e01fefe7fa15",
  measurementId: "G-DVBKF39H5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);