// Scroll to element
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

var timer;

$(".drop-menu").on("mouseover", function() {
  clearTimeout(timer);
  openSubmenu();
}).on("mouseleave", function() {
  timer = setTimeout(
    closeSubmenu
  , 1000);
});

function openSubmenu() {
  $(".submenu").addClass("visible");
}
function closeSubmenu() {
  $(".submenu").removeClass("visible");
}
