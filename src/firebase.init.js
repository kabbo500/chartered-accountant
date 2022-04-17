// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7jnvTg1hvgOQvgiakDvfetfHLL5E6TfY",
    authDomain: "independent-service-prov-1f6b5.firebaseapp.com",
    projectId: "independent-service-prov-1f6b5",
    storageBucket: "independent-service-prov-1f6b5.appspot.com",
    messagingSenderId: "268147437195",
    appId: "1:268147437195:web:a54c32bca7a0e7cdefee8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;