/**
 * Plugin: equal height columns in a responsive layout
 * Author: Marc Loehe (http://marcloehe.de)
 *
 * Usage:
 *
 * $('#container-with-columns').eqHeights();
 *
 */

(function ($) {

  $.fn.eqHeights = function() {

    var el = $(this);
    if (!el.data('eqHeights')) {
      $(window).bind('resize.eqHeights', function() {
        el.eqHeights();
      });
      el.data('eqHeights', true);
    }
    return el.each(function() {
      var curHighest = 0;
      $(this).children().each(function() {
        var el = $(this),
          elHeight = el.height('auto').height();
        if (elHeight > curHighest) {
          curHighest = elHeight;
        }
      }).height(curHighest);
    });
  };

}(jQuery));
