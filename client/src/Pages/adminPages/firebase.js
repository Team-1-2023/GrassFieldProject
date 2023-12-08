// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBghXDLDRPOR4dy5NQhF2LeV5d3RWA93k",
  authDomain: "test-project-93dde.firebaseapp.com",
  projectId: "test-project-93dde",
  storageBucket: "test-project-93dde.appspot.com",
  messagingSenderId: "142210992042",
  appId: "1:142210992042:web:b04609c9665a9881fe8dd3",
  measurementId: "G-J1CVBCEQMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const imageDb = getStorage(app)