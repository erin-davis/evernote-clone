import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const firebase = require('firebase');
require('firebase/firestore');
//in order to get initialzeApp to stop throwing an error, I installed version 6.2.3
firebase.initializeApp({
  apiKey: "AIzaSyCDxUJSkhA1UMW300CBesp0ay2qlYr1kfE",
  authDomain: "evernote-clone-89c6e.firebaseapp.com",
  databaseURL: "https://evernote-clone-89c6e.firebaseio.com",
  projectId: "evernote-clone-89c6e",
  storageBucket: "evernote-clone-89c6e.appspot.com",
  messagingSenderId: "55756198939",
  appId: "1:55756198939:web:9beadd02f58f93805314be",
  measurementId: "G-96EHT9N2PX"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
