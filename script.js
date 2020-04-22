$(function () {
  $(".menu").click(function () {
    $(".hide-nav").fadeIn();
  });
  $(".hide-nav").click(function () {
    $(this).fadeOut();
  });
});

