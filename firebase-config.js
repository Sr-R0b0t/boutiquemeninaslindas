import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

 
const firebaseConfig = {
  apiKey: "AIzaSyB6w7REdziIxQTKwnTaehF1XkwDegce7YI",
  authDomain: "boutique-meninas-lindas.firebaseapp.com",
  projectId: "boutique-meninas-lindas",
  storageBucket: "boutique-meninas-lindas.firebasestorage.app",
  messagingSenderId: "733738941643",
  appId: "1:733738941643:web:c82049329e92716878af4e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };