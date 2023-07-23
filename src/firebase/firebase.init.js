// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0mkUOhNUspedJsIpBdsTblAIUxyPVwP0",
    authDomain: "hotel-agoura.firebaseapp.com",
    projectId: "hotel-agoura",
    storageBucket: "hotel-agoura.appspot.com",
    messagingSenderId: "158540768836",
    appId: "1:158540768836:web:39598c3fad5fdc3639be11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;