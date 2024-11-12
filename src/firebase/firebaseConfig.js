// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyALK1wV5Diq_c6lMscaSUztUhThwI5Bd34",
  authDomain: "pruebavue-tamara.firebaseapp.com",
  projectId: "pruebavue-tamara",
  storageBucket: "pruebavue-tamara.firebasestorage.app",
  messagingSenderId: "859999389111",
  appId: "1:859999389111:web:2c156a60e925124c401432",
  measurementId: "G-DGZN59E45K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export {db,auth}
