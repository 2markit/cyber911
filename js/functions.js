var pContainerHeight = $('.para-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.para-text').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
}



  // Landing Elements
  if(wScroll > $('.grid-pics').offset().top - ($(window).height() / 1.2)) {

    $('.grid-pics figure').each(function(i){

      setTimeout(function(){
        $('.grid-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });



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
