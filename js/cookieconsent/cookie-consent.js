$(document).ready(function () {
  const $consentContainer = $('.js-cookie-consent-container');
  const $modal = $('.js-cookie-consent-modal');
  const embedHTML = `
    <iframe title="Spotify iframe of Artist Nick Henning" data-testid="embed-iframe"
      style="height: 375px; min-height: 375px; max-height: 375px;"
      src="https://open.spotify.com/embed/artist/3NOae9Khh92LtyDsu8UFYL?utm_source=generator&theme=0"
      width="100%" height="375px" frameborder="0" allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
  `;

  function renderDeclineMessage() {
    $consentContainer.html(`
      <div class="c-cookie-consent__content">
        <h3 class="c-heading c-heading--h3">Einbindung blockiert</h3>
        <p class="c-text">Du hast die Spotify Einbindung abgelehnt. Möchtest du sie aktivieren?</p>
        <button class="c-btn c-btn--primary js-cookie-consent-accept">Aktivieren</button>
      </div>
    `).fadeIn();

    localStorage.setItem('spotifyConsent', 'declined');

    $('.js-cookie-consent-accept').on('click', function () {
      localStorage.setItem('spotifyConsent', 'accepted');
      $consentContainer.fadeOut(function () {
        $consentContainer.html(embedHTML).fadeIn();
      });
    });
  }

  const savedConsent = localStorage.getItem('spotifyConsent');
  if (savedConsent === 'accepted') {
    $consentContainer.html(embedHTML).fadeIn();
  } else if (savedConsent === 'declined') {
    renderDeclineMessage();
  } else {
    renderDeclineMessage(); // Default: zeige Modal mit Option
  }

  // Modal öffnen
  $('.js-open-consent-modal').on('click', function () {
    $modal.fadeIn();
  });

  // Modal schließen
  $('.js-consent-close').on('click', function () {
    $modal.fadeOut();
  });

  // Zustimmung im Modal
  $('.js-consent-accept').on('click', function () {
    localStorage.setItem('spotifyConsent', 'accepted');
    $modal.fadeOut(function () {
      location.reload();
    });
  });

  // Ablehnung im Modal
  $('.js-consent-decline').on('click', function () {
    localStorage.setItem('spotifyConsent', 'declined');
    $modal.fadeOut(function () {
      location.reload();
    });
  });
});
