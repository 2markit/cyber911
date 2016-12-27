var pContainerHeight = $('.para-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.para-text').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-ground').css({
      'transform' : 'translate(0px, -'+ wScroll /4 +'%)'
    });

    $('.fore-ground').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }



  // Landing Elements
  //if(wScroll > $('.grid-pics').offset().top - ($(window).height() / 1.2)) {

    //$('.grid-pics figure').each(function(i){

      //setTimeout(function(){
       // $('.grid-pics figure').eq(i).addClass('is-showing');
     // }, (700 * (Math.exp(i * 0.14))) - 700);
   // });
  
//  if(wScroll > $('.grid-pics').offset().top - ($(window).height() / 1.2)) {

   // $('.grid-pics figure').each(function(i){

   //   setTimeout(function(){
   //     $('.grid-pics figure').eq(i).addClass('is-showing');
   //   }, (700 * (Math.exp(i * 0.14))) - 700);
   // });

//  if(wScroll > $('.grid-pics').offset().top - ($(window).height() / 1.2)) {

   // $('.grid-pics figure').each(function(i){

    //  setTimeout(function(){
    //    $('.grid-pics figure').eq(i).addClass('is-showing');
    //  }, (700 * (Math.exp(i * 0.14))) - 700);
   // });

  


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
}




$(document).ready(function(){

    var showHeaderAt = 150;

    var win = $(window),
        body = $('body');

    // Show the fixed header only on larger screen devices

    if(win.width() > 600){

      // When we scroll more than 150px down, we set the
      // "fixed" class on the body element.

      win.on('scroll', function(e){

        if(win.scrollTop() > showHeaderAt) {
          body.addClass('fixed');
        }
        else {
          body.removeClass('fixed');
        }
      });

    }

  }
);
});