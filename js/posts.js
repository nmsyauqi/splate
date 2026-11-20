import { db, auth } from "./firebase.js";
import {
  collection, addDoc, deleteDoc, doc, query, orderBy, limit,
  onSnapshot, serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

export async function createPost(text) {
  const user = auth.currentUser;
  if (!user) throw new Error("Belum login");
  return addDoc(collection(db, "posts"), {
    authorId: user.uid,
    text: text.trim(),
    createdAt: serverTimestamp(),
    likeCount: 0
  });
}

export const deletePost = (id) => deleteDoc(doc(db, "posts", id));

// Mengembalikan fungsi unsubscribe
export function listenPosts(callback) {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(50));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}