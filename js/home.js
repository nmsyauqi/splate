import { listenPosts } from "../posts.js";

export function initHome() {
  const list = document.querySelector("#post-list");

  const unsubscribe = listenPosts((posts) => {
    list.innerHTML = "";
    posts.forEach(p => {
      const el = document.createElement("article");
      el.textContent = p.text;      // ← textContent, BUKAN innerHTML
      list.appendChild(el);
    });
  });

  return unsubscribe; // dipanggil router saat meninggalkan halaman
}