/* scroll to # */
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 750;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    console.log(href);
    if (href !== "#") {
      console.log("not html");
      toggle_burger_menu();
    }
    return false;
  });
});
/* scroll to top */
var btn_class = ".js-btn-goto-top";
var fadeIn_pixel = 768;
$(btn_class).hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > fadeIn_pixel) {
    $(btn_class).fadeIn();
  } else {
    $(btn_class).fadeOut();
  }
});
/* buger */
$(".burger-btn").on("click", function () {
  toggle_burger_menu();
});

function toggle_burger_menu() {
  $(".burger-btn__btn--top").toggleClass("burger-btn__btn--top-close");
  $(".burger-btn__btn--mid").toggleClass("burger-btn__btn--mid-close");
  $(".burger-btn__btn--bottom").toggleClass("burger-btn__btn--bottom-close");
  $(".nav-wrapper").toggleClass("nav-wrapper__slide-in");
  $("body").toggleClass("noscroll");
}
