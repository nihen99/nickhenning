$(document).ready(function () {
  const consentContainer = $('.js-cookie-consent-container');
  const embedHTML = `
    <iframe data-testid="embed-iframe" style="border-radius:12px"
      src="https://open.spotify.com/embed/artist/3NOae9Khh92LtyDsu8UFYL?utm_source=generator&theme=0"
      width="100%" height="352" frameBorder="0" allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
  `;

  function renderDeclineMessage() {
    consentContainer.html(`
      <p>Spotify-Embed wurde deaktiviert.</p>
      <button class="c-btn js-cookie-consent-accept">Doch erlauben</button>
    `);

    localStorage.setItem('spotifyConsent', 'declined');

    $('.js-cookie-consent-accept').on('click', function () {
      consentContainer.html(embedHTML);
      localStorage.setItem('spotifyConsent', 'accepted');
    });
  }

  const savedConsent = localStorage.getItem('spotifyConsent');
  if (savedConsent === 'accepted') {
    consentContainer.html(embedHTML);
  } else if (savedConsent === 'declined') {
    renderDeclineMessage();
  } else {
    $('.js-cookie-consent-accept').on('click', function () {
      consentContainer.html(embedHTML);
      localStorage.setItem('spotifyConsent', 'accepted');
    });

    $('.js-cookie-consent-decline').on('click', function () {
      renderDeclineMessage();
    });
  }

  // Modal logic
  $('.js-open-consent-modal').on('click', function () {
    $('.c-consent-modal').fadeIn();
  });

  $('.js-consent-close').on('click', function () {
    $('.c-consent-modal').fadeOut();
  });

  $('.js-consent-accept').on('click', function () {
    localStorage.setItem('spotifyConsent', 'accepted');
    location.reload();
  });

  $('.js-consent-decline').on('click', function () {
    localStorage.setItem('spotifyConsent', 'declined');
    location.reload();
  });
});

