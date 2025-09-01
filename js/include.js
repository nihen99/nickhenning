$(document).ready(function () {
    $('a').on('click', function (e) {
    e.preventDefault();
    $('.c-loading').removeClass('c-loading--in');
    $('.c-loading').addClass('c-loading--out');

    // Nach kurzer Verzögerung zur Zielseite navigieren
    const link = $(this).attr('href');
    setTimeout(() => {
        window.location.href = link;
    }, 1000); // Dauer der Animation
    });
});