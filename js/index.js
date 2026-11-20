// Simple SPA router and view injector
async function loadPage(pageName, hash = '') {
  try {
    if (!pageName) pageName = 'main';
    const fileUrl = `pages/${pageName}.html`;
    const res = await fetch(fileUrl);
    if (!res.ok) throw new Error('Not found');
    const html = await res.text();
    document.getElementById('app-content').innerHTML = html;
    if (hash) {
      const target = document.getElementById(hash.substring(1));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  } catch (err) {
    document.getElementById('app-content').innerHTML = `<p>404 - Page not found</p>`;
  }
}

document.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  if (a.target === '_blank' || a.origin !== window.location.origin) return;
  let url;
  try { url = new URL(a.href); } catch (err) { return; }
  if (!url.searchParams.has('p')) return;
  e.preventDefault();
  const page = url.searchParams.get('p') || 'main';
  const hash = url.hash;
  window.history.pushState({ page, hash }, '', a.href);
  loadPage(page, hash);
});

window.addEventListener('popstate', (e) => {
  const url = new URL(window.location.href);
  const page = url.searchParams.get('p') || 'main';
  loadPage(page, url.hash);
});

const init = () => {
  const url = new URL(window.location.href);
  loadPage(url.searchParams.get('p') || 'main', url.hash);
};


init();

init();
