// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCFN9oUnXl8MlMtaeRz7rBe4Drf1d3qUQo',
  authDomain: 'proyectu2-programacionavanzada.firebaseapp.com',
  projectId: 'proyectu2-programacionavanzada',
  storageBucket: 'proyectu2-programacionavanzada.appspot.com',
  messagingSenderId: '822775607596',
  appId: '1:822775607596:web:cba9443ad080be62f7fc89',
  measurementId: 'G-N4LXSE9MRP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
