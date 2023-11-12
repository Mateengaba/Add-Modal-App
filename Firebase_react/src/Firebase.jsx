// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs3KDyLtF-zjXiU5V6ZkujHb1tx-EGAqw",
  authDomain: "my-app-react-5cb75.firebaseapp.com",
  projectId: "my-app-react-5cb75",
  storageBucket: "my-app-react-5cb75.appspot.com",
  messagingSenderId: "847871671741",
  appId: "1:847871671741:web:c64587f1e44c5c728266d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app , db };