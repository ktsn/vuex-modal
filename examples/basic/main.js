import Vue from 'vue'
import App from './App'
import store from './store'

import 'vuex-modal/dist/vuex-modal.css'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
