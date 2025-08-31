$(document).ready(function () {
    $('.js-lightbox-trigger').click(function () {
        const imgSrc = $(this).attr('src');
        $('.c-lightbox__img').attr('src', imgSrc);
        $('.c-lightbox').fadeIn();
    });

    $('.c-lightbox__close, .c-lightbox').click(function (e) {
        // Nur schließen, wenn nicht direkt aufs Bild geklickt wurde
        if (!$(e.target).is('.c-lightbox__img')) {
            $('.c-lightbox').fadeOut();
        }
    });
});