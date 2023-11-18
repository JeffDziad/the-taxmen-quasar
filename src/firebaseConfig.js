// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA4fnSqtvYFPMdWgYbe0U4Pm2YSwIog08Y",

  authDomain: "taxmensite.firebaseapp.com",

  projectId: "taxmensite",

  storageBucket: "taxmensite.appspot.com",

  messagingSenderId: "689271134866",

  appId: "1:689271134866:web:b6cf90ddfa8f63fcbda44b"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};
