$(document).ready(function () {
    $('.js-slick-multiple').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev c-btn">Previous</button>',
        nextArrow: '<button type="button" class="slick-next c-btn">Next</button>',
        appendDots: $('.js-slick-multiple__dots'),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});