/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
$(document).ready(() => {
  $('.portrait-row').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    arrows: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.video-row').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  });
});

$('.collapse').on('show.bs.collapse', function() {
  $('.portrait-row').slick('next');
});
