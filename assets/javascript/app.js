// Smooth scrolling when clicking to go to Comments section
$('.smooth-goto').on('click', function() {
  $('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 1000);
  return false;
});

// Back To Top Button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// GraphComment Comment Section
/* - - - CONFIGURATION VARIABLES - - - */

// make sure the id is yours
window.gc_params = {
  graphcomment_id: 'ESLToolbox',

  // if your website has a fixed header, indicate it's height in pixels
  fixed_header_height: 0
};

/* - - - DON'T EDIT BELOW THIS LINE - - - */

(function() {
  var gc = document.createElement('script');
  gc.type = 'text/javascript';
  gc.async = true;
  gc.src =
    'https://graphcomment.com/js/integration.js?' +
    Math.round(Math.random() * 1e8);
  (
    document.getElementsByTagName('head')[0] ||
    document.getElementsByTagName('body')[0]
  ).appendChild(gc);
})();
