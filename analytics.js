(function () {
  const GA_ID = 'G-RM63YN70HJ';

  // If you have disabled analytics on this browser, don't track.
  if (localStorage.getItem('ga_disabled') === 'true') {
    return;
  }

  // Load Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
})();