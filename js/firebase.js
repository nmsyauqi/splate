import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5V4JSJzdCD7m9x4kc1OYfK-tLG-Nx8Rc",
  authDomain: "splate-2d59c.firebaseapp.com",
  projectId: "splate-2d59c",
  storageBucket: "splate-2d59c.firebasestorage.app",
  messagingSenderId: "947670802489",
  appId: "1:947670802489:web:155b205c81005848982de8",
  measurementId: "G-4CL9VNF4QT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);