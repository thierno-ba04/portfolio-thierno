// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQ4SArKhd9gRlqsboYV1Gfrm5VfZPjps",
  authDomain: "mon-portfolio-50611.firebaseapp.com",
  projectId: "mon-portfolio-50611",
  storageBucket: "mon-portfolio-50611.appspot.com",
  messagingSenderId: "306759125937",
  appId: "1:306759125937:web:66963384f81dd343614b90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDb = getFirestore(app);