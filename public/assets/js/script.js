(function ($) {
  "use strict";
  var nav = $('nav');
  var navHeight = nav.outerHeight();

  // Top Button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.top').fadeIn('slow');
    } else {
      $('.top').fadeOut('slow');
    }
  });
  $('.top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - navHeight + 5)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function () {
    $('.navbar-collapse').collapse('hide');
  });
  /*--/ End Scrolling nav /--*/

})(jQuery);