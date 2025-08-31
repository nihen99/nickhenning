$(document).ready(function () {
    $('.js-slick-multiple').slick({
        // Common
        infinite: false,
        autoplay: false,
        vertical: false,
        verticalSwiping: false,
        adaptiveHeight: true,

        // Nav
        arrows: true,
        prevArrow: '<button title="Previous" type="button" class="slick-prev c-btn"><svg width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg></button>',
        nextArrow: '<button title="Next" type="button" class="slick-next c-btn"><svg width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg></button>',
        appendArrows: $('.js-slick-multiple__arrows'),
        dots: true,
        appendDots: $('.js-slick-multiple__dots'),

        // Layout
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});