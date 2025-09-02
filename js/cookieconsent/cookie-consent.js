$(document).ready(function () {
  const $modal = $('.js-cookie-consent-modal');
  const $consentContainer = $('.js-cookie-consent-container');
  const $toggle = $('.js-consent-toggle');
  const $updateBtn = $('.js-consent-update');

  const embedHTML = `
    <iframe title="Spotify iframe of Artist Nick Henning" data-testid="embed-iframe"
      style="height: 375px; min-height: 375px; max-height: 375px;"
      src="https://open.spotify.com/embed/artist/3NOae9Khh92LtyDsu8UFYL?utm_source=generator&theme=0"
      width="100%" height="375px" frameborder="0" allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
  `;

  // Initial Consent Check
  const savedConsent = localStorage.getItem('spotifyConsent');
  if (savedConsent === 'accepted') {
    $consentContainer.html(embedHTML).fadeIn();
    $toggle.prop('checked', true);
  } else if (savedConsent === 'declined') {
    $consentContainer.html('<div class="c-cookie-consent__content"> <h3 class="c-heading c-heading--h3">Einbindung blockiert</h3> <p class="c-text">Du hast die Spotify Einbindung abgeleht, dadurch hast du das Tracking von Spotify blockiert. Du möchtest die Einbindung aktivieren?</p> <button class="c-btn c-btn--primary js-cookie-consent-accept">Aktivieren</button> </div>').fadeIn();
    $toggle.prop('checked', false);
  }

  // Modal öffnen
  $('.js-open-consent-modal').on('click', function () {
    $modal.fadeIn();
  });

  // Modal schließen
  $('.js-consent-close').on('click', function () {
    $modal.fadeOut();
  });

  // Einstellungen übernehmen
  $updateBtn.on('click', function () {
    const isChecked = $toggle.is(':checked');

    if (isChecked) {
      localStorage.setItem('spotifyConsent', 'accepted');
      $consentContainer.fadeOut(function () {
        $consentContainer.html(embedHTML).fadeIn();
      });
    } else {
      localStorage.setItem('spotifyConsent', 'declined');
      $consentContainer.fadeOut(function () {
        $consentContainer.html('<p class="c-text">Spotify-Einbindung wurde blockiert.</p>').fadeIn();
      });
    }

    $modal.fadeOut();
  });
});
