
$(function(){
  'use strict'
  // adjust header
  var myHeader = $(".header");
  myHeader.height($(window).height());
  $(window).resize(function(){
    myHeader.height($(window).height());
    $(".slider").each(function(){
      $(this).css("paddingTop",($(window).height()-$(".slider div").height())/2);
    });
  });
  // adding class active for links
  $(".navbar .links .list-item").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
  //centering the slider
  $(".slider").each(function(){
    $(this).css("paddingTop",($(window).height()-$(".slider div").height())/2);
  });
 // trigger bxSlider
 $('.slider').bxSlider();
 //smooth scroll to the div
 $('.navbar .links .list-item  a').click(function(){
   $('html,body').animate({
     scrollTop: $('#'+$(this).data('value')).offset().top
   },1000);
 });
// auto slider function
(function autoslider() {
  $('.testimonials .test-slider .active').each(function(){

     if(!$(this).is(' :last-child')){
      $(this).delay(3000).fadeOut(1000,function(){
        $(this).removeClass('active').next().addClass('active').fadeIn();
        autoslider();
      });
      }
   else {
    $(this).delay(3000).fadeOut(1000,function(){
      $(this).removeClass('active');
      $('.testimonials .test-slider div').eq(0).addClass('active').fadeIn();
      autoslider();
    });
    }
  });
}());
// styling list of projects
$('.projects ul li').click(function(){
  $(this).addClass('selected').siblings().removeClass('selected');
  });
  // tigger mixer
  var mixer = mixitup('#container');
});
