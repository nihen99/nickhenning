$(document).ready(function () {
    const $galleryItems = $('.c-gallery__grid .js-lightbox-trigger');
    let currentIndex = -1;

    function preloadImage(src) {
        const img = new Image();
        img.src = src;
    }

    function openLightbox(index) {
        currentIndex = index;
        const imgSrc = $galleryItems.eq(index).attr('src');
        $('.c-lightbox__img').attr('src', imgSrc);
        $('.c-lightbox').fadeIn().css("display", "flex");

        // Preload next and previous images
        const nextIndex = (index + 1) % $galleryItems.length;
        const prevIndex = (index - 1 + $galleryItems.length) % $galleryItems.length;
        preloadImage($galleryItems.eq(nextIndex).attr('src'));
        preloadImage($galleryItems.eq(prevIndex).attr('src'));
    }

    $galleryItems.on('click', function () {
        openLightbox($galleryItems.index(this));
    });

    $galleryItems.on('keydown', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            openLightbox($galleryItems.index(this));
        }
    });

    $('.c-lightbox__close, .c-lightbox').click(function (e) {
        if (!$(e.target).is('.c-lightbox__img') && !$(e.target).hasClass('c-lightbox__arrow')) {
            $('.c-lightbox').fadeOut();
        }
    });

    $('.c-lightbox__arrow--next').click(function () {
        currentIndex = (currentIndex + 1) % $galleryItems.length;
        openLightbox(currentIndex);
    });

    $('.c-lightbox__arrow--prev').click(function () {
        currentIndex = (currentIndex - 1 + $galleryItems.length) % $galleryItems.length;
        openLightbox(currentIndex);
    });
});
