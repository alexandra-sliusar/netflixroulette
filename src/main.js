import Vue from 'vue'
// import Home from './Home.vue'
import Movie from './Movie.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Movie),
}).$mount('#app')
