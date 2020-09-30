import Vue from "vue";
import VueRouter from 'vue-router'
import App from './pages/App.vue'

import store from "./store/store";
import underscore from "vue-underscore";
import plugin from "./plugins/plugin";
import ApiService from "./api";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(underscore);
Vue.use(plugin);
Vue.use(VueRouter);

ApiService.init();

new Vue({
  el: "#app",
  router,
  store,
  render(h) {
    return h(App);
  },
});
