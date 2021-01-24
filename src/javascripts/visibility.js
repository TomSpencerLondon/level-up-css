$(function() {
  // When jQuery is ready, attach listeners
  $(window).on('DOMContentLoaded load resize scroll', addClassIfVisible); 
});

var addClassIfVisible = function() {
  $('.show-on-scroll').each(function(index, item) {
    if (isElementInViewport(item)) {
      $(item).addClass('is-visible');
    } else {
      $(item).removeClass('is-visible');
    }
  });
}

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}