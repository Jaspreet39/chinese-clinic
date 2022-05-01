// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLMDhI65wkVIlqWB9SmtPisdicsnGTmnE",
    authDomain: "chinese-herbal-clinic.firebaseapp.com",
    projectId: "chinese-herbal-clinic",
    storageBucket: "chinese-herbal-clinic.appspot.com",
    messagingSenderId: "901343805563",
    appId: "1:901343805563:web:a840835683361326a4a2de"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()

export {db}