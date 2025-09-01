$(document).ready(function () {
    const currentPath = window.location.pathname.split('/').pop();

    $('.c-nav__list__item').each(function () {
        const linkPath = $(this).attr('href');
        if (linkPath === currentPath) {
            $(this).addClass('c-nav__list__item--current');
        }
    });
});