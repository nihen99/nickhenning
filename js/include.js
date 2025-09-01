$(document).ready(function () {
  const currentPage = window.location.href;

  $('.c-nav__list__item').each(function () {
    const linkHref = $(this).attr('href');
    const absoluteHref = new URL(linkHref, window.location.origin).href;

    if (currentPage === absoluteHref) {
      $(this).addClass('c-nav__list__item--current');
    }
  });
});