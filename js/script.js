var goto_top_btn_class = ".js-btn-goto-top";
var fadeIn_pixel = 768;
var is_displayed_burger = false;

/* scroll to # */
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 750;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    if (href !== "#" && is_displayed_burger == true) {
      toggle_burger_menu();
    }
    return false;
  });
});

/* scroll to top */
$(goto_top_btn_class).hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > fadeIn_pixel) {
    $(goto_top_btn_class).fadeIn();
  } else {
    $(goto_top_btn_class).fadeOut();
  }
});
/* burger */
$(".burger-btn").on("click", function () {
  is_displayed_burger = !is_displayed_burger;
  toggle_burger_menu();
});

function toggle_burger_menu() {
  $(".burger-btn__btn--top").toggleClass("burger-btn__btn--top-close");
  $(".burger-btn__btn--mid").toggleClass("burger-btn__btn--mid-close");
  $(".burger-btn__btn--bottom").toggleClass("burger-btn__btn--bottom-close");
  $(".nav-wrapper").toggleClass("nav-wrapper__slide-in");
  $("body").toggleClass("noscroll");
}
