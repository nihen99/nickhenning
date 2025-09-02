function showConsentToastAndReload() {
    const $toast = $(`
    <div class="c-toast" style="display:none;">
      <svg width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
      <span>Einstellungen aktualisiert</span>
    </div>
  `);

    $('body').append($toast);
    $toast.fadeIn(200).css('opacity', '1');

    setTimeout(() => {
        $toast.fadeOut(500, function () {
            $(this).remove();
            location.reload();
        });
    }, 2000);
}


function initCookieConsent() {
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
        $consentContainer.html(`
      <div class="c-cookie-consent__content">
        <h3 class="c-heading c-heading--h3">Einbindung blockiert</h3>
        <p class="c-text">Du hast die Spotify Einbindung abgelehnt. Dadurch hast du das Tracking von Spotify blockiert. Du möchtest die Einbindung aktivieren?</p>
        <button class="c-btn c-btn--primary js-cookie-consent-accept">Aktivieren</button>
      </div>
    `).fadeIn();
        $toggle.prop('checked', false);
    } else {
        $consentContainer.html(`
      <div class="c-cookie-consent__content">
        <h3 class="c-heading c-heading--h3">Spotify Einbindung?</h3>
        <p class="c-text">Um Spotify-Inhalte zu laden, benötigen ich deine Zustimmung. Die Zustimmung
            aktiviert das Tracking von Spotify. Du kannst deine Zustimmung über die
            Datenschutz-Einstellungen jederzeit anpassen.</p>
        <div class="c-btnbar">
          <button type="button" class="c-btn c-btn--primary js-cookie-consent-accept">Akzeptieren</button>
          <button type="button" class="c-btn js-cookie-consent-decline">Ablehnen</button>
        </div>
      </div>
    `).fadeIn();
    }

    // Modal öffnen
    $('.js-open-consent-modal').on('click', function () {
        const savedConsent = localStorage.getItem('spotifyConsent');
        $toggle.prop('checked', savedConsent === 'accepted'); // Toggle aktualisieren
        $modal.fadeIn();
    });

    // Modal schließen
    $('.js-consent-close').on('click', function () {
        $modal.fadeOut();
    });

    // Einstellungen übernehmen im Modal
    $updateBtn.on('click', function () {
        const isChecked = $toggle.is(':checked');
        localStorage.setItem('spotifyConsent', isChecked ? 'accepted' : 'declined');
        showConsentToastAndReload();
    });

    // Akzeptieren außerhalb des Modals
    $(document).on('click', '.js-cookie-consent-accept', function () {
        $toggle.prop('checked', true);
        localStorage.setItem('spotifyConsent', 'accepted');
        showConsentToastAndReload();
    });

    // Ablehnen außerhalb des Modals
    $(document).on('click', '.js-cookie-consent-decline', function () {
        $toggle.prop('checked', false);
        localStorage.setItem('spotifyConsent', 'declined');
        showConsentToastAndReload();
    });
}


// Navigation laden
fetch('partials/nav.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('pNav').innerHTML = html;

        setTimeout(() => {
            const currentPage = window.location.pathname.split('/').pop();

            document.querySelectorAll('.c-nav__list__item').forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('c-nav__list__item--current');
                }
            });
        }, 0);
    })
    .catch(err => {
        console.error('Fehler beim Laden der Navigation:', err);
    });

// Footer laden + Cookie-Consent initialisieren
fetch('/partials/footer.html')
    .then(res => res.text())
    .then(html => {
        document.querySelector('footer').innerHTML = html;

        // Jetzt ist der Footer im DOM → Cookie-Consent aktivieren
        initCookieConsent();
    }).catch(err => {
        console.error('Fehler beim Laden des Footers:', err);
    });
