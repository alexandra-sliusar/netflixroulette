import lazyload from "./../directives/lazy-load";

export default {
  install(Vue) {
    Vue.directive("lazyload", lazyload);
    Vue.filter("parseDuration", function(value) {
      var numberPattern = /\d+/g;
      var timeParts = value.match(numberPattern);
      if (!timeParts || timeParts.length === 0) return 0;
      var duration = Number(timeParts[0]) * 60;
      if (timeParts.length > 1) {
        duration += Number(timeParts[1]);
      }
      return duration;
    });
    Vue.filter("parseRating", function(value) {
      return parseFloat(value).toFixed(1);
    });
  },
};
