import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCFmXSqKicuTD1XwIdU0-8mQQr2Ogyz3dg",
  authDomain: "listovino-89462.firebaseapp.com",
  databaseURL: "https://listovino-89462.firebaseio.com",
  storageBucket: "listovino-89462.appspot.com",
  messagingSenderId: "559126080958"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
