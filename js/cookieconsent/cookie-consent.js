document.addEventListener("DOMContentLoaded", function () {
    const consentContainer = document.querySelector('.js-cookie-consent-container');

    const embedHTML = `
      <iframe data-testid="embed-iframe" style="border-radius:12px"
        src="https://open.spotify.com/embed/artist/3NOae9Khh92LtyDsu8UFYL?utm_source=generator&theme=0"
        width="100%" height="352" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    `;

    function renderDeclineMessage() {
      consentContainer.innerHTML = `
        <p>Spotify-Embed wurde deaktiviert.</p>
        <button class="js-cookie-consent-accept">Doch erlauben</button>
      `;
      localStorage.setItem('spotifyConsent', 'declined');

      // Re-bind accept button
      document.querySelector('.js-cookie-consent-accept').addEventListener('click', () => {
        consentContainer.innerHTML = embedHTML;
        localStorage.setItem('spotifyConsent', 'accepted');
      });
    }

    // Initial consent check
    const savedConsent = localStorage.getItem('spotifyConsent');
    if (savedConsent === 'accepted') {
      consentContainer.innerHTML = embedHTML;
    } else if (savedConsent === 'declined') {
      renderDeclineMessage();
    } else {
      // Bind initial buttons
      document.querySelector('.js-cookie-consent-accept').addEventListener('click', () => {
        consentContainer.innerHTML = embedHTML;
        localStorage.setItem('spotifyConsent', 'accepted');
      });

      document.querySelector('.js-cookie-consent-decline').addEventListener('click', () => {
        renderDeclineMessage();
      });
    }
  });
