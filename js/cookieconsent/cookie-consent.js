document.addEventListener("DOMContentLoaded", function () {
    const consentContainer = document.querySelector('.js-cookie-consent-container');
    const embedHTML = `
      <iframe title="Spotify iframe of Artist Nick Henning" data-testid="embed-iframe" style="height: 375px; min-height: 375px; max-height: 375px;"
        src="https://open.spotify.com/embed/artist/3NOae9Khh92LtyDsu8UFYL?utm_source=generator&theme=0"
        width="100%" height="375px" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    `;

    function renderDeclineMessage() {
      consentContainer.innerHTML = `
        <div class="c-cookie-consent__content">
            <h3 class="c-heading c-heading--h3">Einbindung blockiert</h3>
            <p class="c-text">Du hast die Spotify Einbindung abgeleht, dadurch hast du das Tracking von Spotify blockiert. Du möchtest die Einbindung aktivieren?</p>
            <button class="c-btn c-btn--primary js-cookie-consent-accept">Aktivieren</button>
        </div>
      `;
      localStorage.setItem('spotifyConsent', 'declined');

      document.querySelector('.js-cookie-consent-accept').addEventListener('click', () => {
        consentContainer.innerHTML = embedHTML;
        localStorage.setItem('spotifyConsent', 'accepted');
      });
    }

    const savedConsent = localStorage.getItem('spotifyConsent');
    if (savedConsent === 'accepted') {
      consentContainer.innerHTML = embedHTML;
    } else if (savedConsent === 'declined') {
      renderDeclineMessage();
    } else {
      document.querySelector('.js-cookie-consent-accept').addEventListener('click', () => {
        consentContainer.innerHTML = embedHTML;
        localStorage.setItem('spotifyConsent', 'accepted');
      });

      document.querySelector('.js-cookie-consent-decline').addEventListener('click', () => {
        renderDeclineMessage();
      });
    }

    // Modal logic
    document.querySelector('.js-open-settings-modal').addEventListener('click', () => {
      document.querySelector('.js-settings-modal').style.display = 'flex';
    });

    document.querySelector('.js-settings-close').addEventListener('click', () => {
      document.querySelector('.js-settings-modal').style.display = 'none';
    });

    document.querySelector('.js-consent-accept').addEventListener('click', () => {
      localStorage.setItem('spotifyConsent', 'accepted');
      location.reload();
    });

    document.querySelector('.js-consent-decline').addEventListener('click', () => {
      localStorage.setItem('spotifyConsent', 'declined');
      location.reload();
    });
  });