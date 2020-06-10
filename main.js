$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "center",
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    pageDots: false,
    adaptiveHeight: true,
  });

  var flkty = new Flickity(".main-carousel", {});
  $(".button-previous").on("click", function () {
    flkty.previous();
  });
  $(".button-next").on("click", function () {
    flkty.next();
  });
  window.removeEventListener("scroll", event);
});

let footerBox = document.querySelector(".footer-content");
let height = footerBox.offsetHeight;
let isMobile = window.matchMedia("only screen and (max-width: 767px)").matches
  ? 18
  : 0;
document.querySelector(".footer-overlay").style.height =
  height + isMobile + "px";
