document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector('.c-consent-modal');
    const acceptBtn = document.querySelector('.js-consent-accept');
    const declineBtn = document.querySelector('.js-consent-decline');
    const closeBtn = document.querySelector('.js-consent-close');

    // Öffnen des Modals (z. B. über einen Button irgendwo auf der Seite)
    document.querySelector('.js-open-consent-modal').addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    // Schließen
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Zustimmung
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('spotifyConsent', 'accepted');
      modal.style.display = 'none';
      location.reload(); // Seite neu laden, um Embed zu aktivieren
    });

    // Ablehnung
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('spotifyConsent', 'declined');
      modal.style.display = 'none';
      location.reload(); // Seite neu laden, um Embed zu entfernen
    });
  });
