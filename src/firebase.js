// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoDmxG0OazVn_B0Ivg1mC405jvayaK6SI",
    authDomain: "ecom-webapp-453ea.firebaseapp.com",
    projectId: "ecom-webapp-453ea",
    storageBucket: "ecom-webapp-453ea.appspot.com",
    messagingSenderId: "145980743055",
    appId: "1:145980743055:web:f50cf5654c071dbc947ffa",
    measurementId: "G-H9DYSLSKC1"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export { db, auth };