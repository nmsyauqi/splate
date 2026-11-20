import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { doc, setDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

export async function register(email, password, username) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  // Auth hanya menyimpan email/password, jadi profil kita simpan di Firestore
  await setDoc(doc(db, "users", cred.user.uid), {
    username,
    createdAt: serverTimestamp()
  });
  return cred.user;
}

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const watchAuth = (callback) => onAuthStateChanged(auth, callback);