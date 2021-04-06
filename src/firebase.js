import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhiX8wky_MM41kKcgsQBGBxzB_OxPFaUc",
  authDomain: "facebook-f5945.firebaseapp.com",
  databaseURL: "https://facebook-f5945.firebaseio.com",
  projectId: "facebook-f5945",
  storageBucket: "facebook-f5945.appspot.com",
  messagingSenderId: "412687798487",
  appId: "1:412687798487:web:454e02c627a7b157d96092",
  measurementId: "G-GWY79VSHLJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
//const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
export { auth };
export default db;
