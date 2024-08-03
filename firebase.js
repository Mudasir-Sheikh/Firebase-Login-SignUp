
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth , onAuthStateChanged , signOut , sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { doc , setDoc , getFirestore , getDoc  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLyrz1dO4Nsms0kMknEZslyYs12EHiJAU",
    authDomain: "fir-website-c3329.firebaseapp.com",
    projectId: "fir-website-c3329",
    storageBucket: "fir-website-c3329.appspot.com",
    messagingSenderId: "872840596463",
    appId: "1:872840596463:web:af809ff2e322dc885d041a",
    measurementId: "G-JVGTWE14G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



export{
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    doc,
    setDoc,
    db,
    getDoc
}