$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
        'transform' : 'translate(0px, '+ wScroll /2 +'%)'
      });

  $('.foreground').css({
        'transform' : 'translate(0px, '+ wScroll /6 +'%)'
      });

  if(wScroll > $('.mywork').offset().top - ($(window).height() / 1.5)){

    $('.mywork figure').each(function(){

      $('.mywork figure').addClass('is-showing');
    });
  }

  if(wScroll > $('.large-window').offset().top - $(window).height()){
    $('.large-window').css({'background-position' : 'center '+ (wScroll - $('.large-window').offset().top) +'px' });




  }
});
