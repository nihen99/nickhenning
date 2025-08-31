$(document).ready(function () {
    $('.js-slick-multiple').slick({
        // Common
        infinite: false,
        autoplay: false,
        vertical: false,
        verticalSwiping: false,

        // Nav
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev c-btn">Previous</button>',
        nextArrow: '<button type="button" class="slick-next c-btn">Next</button>',
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});