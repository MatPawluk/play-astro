function init() {
  const cookieScript = document.querySelector('#cookieyes');
  if (cookieScript) {
    cookieScript.remove();
  }

  const newScript = document.createElement('script');
  newScript.id = 'cookieyes';
  newScript.type = 'text/javascript';
  newScript.src = 'https://cdn-cookieyes.com/client_data/947994c939c8885fc7bbcabc/script.js';

  document.head.appendChild(newScript);
}

document.addEventListener('DOMContentLoaded', () => {
  const beforeSwapListener = () => {
    const oldScript = document.querySelector('#cookieyes');
    if (oldScript) {
      oldScript.remove();
    }
    document.removeEventListener('astro:before-swap', beforeSwapListener);
  };

  document.addEventListener('astro:before-swap', beforeSwapListener, { once: true });

  init();
});
