$(document).ready(function () {
    let currentIndex = -1;

    function openLightbox(index) {
        const $galleryItems = $('.c-gallery__grid .js-lightbox-trigger');
        currentIndex = index;
        const imgSrc = $galleryItems.eq(index).attr('src');
        $('.c-lightbox__img').attr('src', imgSrc);
        $('.c-lightbox').fadeIn().css("display", "flex");
    }

    // Delegated click event
    $('.c-gallery__grid').on('click', '.js-lightbox-trigger', function () {
        const $galleryItems = $('.c-gallery__grid .js-lightbox-trigger');
        openLightbox($galleryItems.index(this));
    });

    // Delegated keydown event
    $('.c-gallery__grid').on('keydown', '.js-lightbox-trigger', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            const $galleryItems = $('.c-gallery__grid .js-lightbox-trigger');
            openLightbox($galleryItems.index(this));
        }
    });

    $('.c-lightbox__close, .c-lightbox').click(function (e) {
        if (!$(e.target).is('.c-lightbox__img') && !$(e.target).hasClass('c-lightbox__arrow')) {
            $('.c-lightbox').fadeOut();
        }
    });

    $('.c-lightbox__arrow--next').click(function () {
        const $galleryItems = $('.c-gallery__grid .js-lightbox-trigger');
        currentIndex = (currentIndex + 1) % $galleryItems.length;
        openLightbox(currentIndex);
    });

    $('.c-lightbox__arrow--prev').click(function () {
        const $galleryItems = $('.c-gallery__grid .js-lightbox-trigger');
        currentIndex = (currentIndex - 1 + $galleryItems.length) % $galleryItems.length;
        openLightbox(currentIndex);
    });
});
