/**
 * Plugin: equal height columns in a responsive layout
 * Author: Marc Loehe (http://marcloehe.de)
 * Dual licensed under the MIT and GPL licenses.
 *
 * Usage:
 * $('#container-with-columns').eqHeights();
 *
 * Demo:
 * http://jsfiddle.net/boundaryfunctions/s22dC/embedded/result/
 *
 */

(function ($) {

  $.fn.eqHeights = function () {

    var el = $(this);
    if (el.length > 0 && !el.data('eqHeights')) {
      $(window).bind('resize.eqHeights', function () {
        el.eqHeights();
      });
      el.data('eqHeights', true);
    }
    return el.each(function () {
      var curHighest = 0;
      $(this).children().each(function () {
        var el = $(this),
          elHeight = el.height('auto').height();
        if (elHeight > curHighest) {
          curHighest = elHeight;
        }
      }).height(curHighest);
    });
  };

}(jQuery));
