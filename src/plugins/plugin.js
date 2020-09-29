import lazyload from "./../directives/lazy-load";

export default {
  install(Vue) {
    Vue.directive("lazyload", lazyload);
    Vue.filter("parseRating", function(value) {
      return parseFloat(value).toFixed(1);
    });
    Vue.filter("retrieveYear", function(value) {
      if (!value) return "";
      return value.split("-")[0];
    });
  },
};
