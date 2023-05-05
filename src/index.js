import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCDdAVIay0XBbbVs40Lsz6bO_VLZhWWMpo",
  authDomain: "react-ecommerce-homedecoration.firebaseapp.com",
  projectId: "react-ecommerce-homedecoration",
  storageBucket: "react-ecommerce-homedecoration.appspot.com",
  messagingSenderId: "919900638334",
  appId: "1:919900638334:web:dd4d2459b707c63aca1c2f"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


