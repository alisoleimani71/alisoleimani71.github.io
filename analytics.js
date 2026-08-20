(function () {
  const GA_ID = 'G-RM63YN70HJ';

  // Disable analytics for this browser
  if (new URLSearchParams(window.location.search).has('noanalytics')) {
    localStorage.setItem('ga_disabled', 'true');
  }

  // Re-enable analytics if needed
  if (new URLSearchParams(window.location.search).has('analytics')) {
    localStorage.removeItem('ga_disabled');
  }

  // Don't track this browser
  if (localStorage.getItem('ga_disabled') === 'true') {
    return;
  }

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