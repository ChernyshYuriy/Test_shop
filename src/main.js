import Vue from 'vue'
import App from './App.vue'
import { store } from './vuex/store'
import router from './router/router'

new Vue({
  store: store,
  router: router,
  el: '#app',
  render: h => h(App),
})