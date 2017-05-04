// jQuery page scrolling -- jQuery Easing plugin
$('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 60)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});
// Closes the Navbar on Menu Item Click
$('.navbar-collapse ul li a').click(function(){
  $('.navbar-toggle:visible').click();
});
