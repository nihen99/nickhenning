document.addEventListener("DOMContentLoaded", function () {
    const consentContainer = document.querySelector('.js-cookie-consent-container');
    const acceptBtn = document.querySelector('.js-cookie-consent-accept');
    const declineBtn = document.querySelector('.js-cookie-consent-decline');

    const embedHTML = `
      <iframe data-testid="embed-iframe" style="border-radius:12px"
        src="https://open.spotify.com/embed/artist/3NOae9Khh92LtyDsu8UFYL?utm_source=generator&theme=0"
        width="100%" height="600" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    `;

    acceptBtn.addEventListener('click', () => {
      consentContainer.innerHTML = embedHTML;
      // Optional: Speichern der Zustimmung im LocalStorage
      localStorage.setItem('spotifyConsent', 'accepted');
    });

    declineBtn.addEventListener('click', () => {
      consentContainer.innerHTML = '<p>Spotify-Embed wurde deaktiviert.</p>';
      localStorage.setItem('spotifyConsent', 'declined');
    });

    // Optional: Consent merken
    const savedConsent = localStorage.getItem('spotifyConsent');
    if (savedConsent === 'accepted') {
      consentContainer.innerHTML = embedHTML;
    } else if (savedConsent === 'declined') {
      consentContainer.innerHTML = '<p>Spotify-Embed wurde deaktiviert.</p>';
    }
  });
