$(document).ready(function () {
    const $galleryItems = $('.c-gallery__grid .js-lightbox-trigger');
    let currentIndex = -1;

    $galleryItems.click(function () {
        currentIndex = $galleryItems.index(this);
        const imgSrc = $(this).attr('src');
        $('.c-lightbox__img').attr('src', imgSrc);
        $('.c-lightbox').fadeIn().css("display", "flex");
    });

    $('.c-lightbox__close, .c-lightbox').click(function (e) {
        if (!$(e.target).is('.c-lightbox__img') && !$(e.target).hasClass('c-lightbox__arrow')) {
            $('.c-lightbox').fadeOut();
        }
    });

    $('.c-lightbox__arrow--next').click(function () {
        currentIndex = (currentIndex + 1) % $galleryItems.length;
        const nextSrc = $galleryItems.eq(currentIndex).attr('src');
        $('.c-lightbox__img').attr('src', nextSrc);
    });

    $('.c-lightbox__arrow--prev').click(function () {
        currentIndex = (currentIndex - 1 + $galleryItems.length) % $galleryItems.length;
        const prevSrc = $galleryItems.eq(currentIndex).attr('src');
        $('.c-lightbox__img').attr('src', prevSrc);
    });
});
