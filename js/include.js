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
