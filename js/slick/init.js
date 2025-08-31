$(document).ready(function () {
    $('.js-slick-multiple').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev c-btn">Previous</button>',
        nextArrow: '<button type="button" class="slick-next c-btn">Next</button>',
        appendArrows: $('.js-slick-multiple__arrows'),
        dots: true,
        appendDots: $('.js-slick-multiple__dots'),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});