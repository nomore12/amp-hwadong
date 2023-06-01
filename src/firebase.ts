// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB9fuk6k0p5IzA5DAzP3xI6G-nlUMi56XA',
  authDomain: 'hwadong-cab7c.firebaseapp.com',
  databaseURL:
    'https://hwadong-cab7c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'hwadong-cab7c',
  storageBucket: 'hwadong-cab7c.appspot.com',
  messagingSenderId: '1040590879662',
  appId: '1:1040590879662:web:92d8e87bb4b0383df1a63f',
  measurementId: 'G-4L7QE91S4J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, database, storage };
