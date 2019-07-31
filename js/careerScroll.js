/* eslint-disable no-undef */
$(document).ready(() => {

  // smooth scrolling
  $('.community-nav').click(() => {
    $('html, body').animate({ scrollTop: $('#community').offset().top }, 1000);
  });
  $('.people-nav').click(() => {
    $('html, body').animate({ scrollTop: $('#people').offset().top }, 1000);
  });
  $('.executive-nav').click(() => {
    console.log('CLICK');
    $('html, body').animate({ scrollTop: $('#executive').offset().top }, 1000);
  });
  $('.systems-nav').click(() => {
    $('html, body').animate({ scrollTop: $('#systems').offset().top }, 1000);
  });
  $('.brand-nav').click(() => {
    $('html, body').animate({ scrollTop: $('#brand').offset().top }, 1000);
  });
  $('.experience-nav').click(() => {
    $('html, body').animate({ scrollTop: $('#experience').offset().top }, 1000);
  });
});