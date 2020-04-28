$(function () {
  $(".menu").click(function () {
    $(".hide-nav").fadeIn();
  });
  $(".hide-nav").click(function () {
    $(this).fadeOut();
  });
  var loader = $('.loader-wrap');
  $(window).on('load', function () {
    loader.fadeOut();
  });
  setTimeout(function () {
    loader.fadeOut();
  }, 3000);
});
