
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch(
      [
      // "images/slide/ckw.jpg", 
      // "images/slide/cakwe.jpg",
      "images/slide/cakwe_logo.png",
      "images/slide/12.jpg",
      "images/slide/17.jpg",
      "images/slide/ckw1.jpg",
      "images/kkn.jpg",
      "images/slide/penyuluhan.jpeg",
      
    ],  
    {duration: 2000, fade: 750});
    
  })(window.jQuery);


