// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAErR27e7kWR9yq36d2UrJYFNG8gDrV0-c",
//   authDomain: "logintestdatabase-719bc.firebaseapp.com",
//   projectId: "logintestdatabase-719bc",
//   storageBucket: "logintestdatabase-719bc.appspot.com",
//   messagingSenderId: "254912480836",
//   appId: "1:254912480836:web:20924d7def02ba5d0b9e11",
//   measurementId: "G-WBY2RNQGP5"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA5SEXZ2nWWJ1VxiU8cVCSgVdfFuZ_xu5M",
  authDomain: "authapp2-e3a80.firebaseapp.com",
  projectId: "authapp2-e3a80",
  storageBucket: "authapp2-e3a80.appspot.com",
  messagingSenderId: "1063149919884",
  appId: "1:1063149919884:web:0c13a1a3c7ef60014ea5a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };