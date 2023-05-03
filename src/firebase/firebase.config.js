// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-s_qPEUSoV2VUCFOT9l6TtgjnT1-m9sY",
    authDomain: "taste-tracker.firebaseapp.com",
    projectId: "taste-tracker",
    storageBucket: "taste-tracker.appspot.com",
    messagingSenderId: "333133019447",
    appId: "1:333133019447:web:cf7b0ce519202686e902b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;