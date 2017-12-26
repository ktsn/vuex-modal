import Vue from 'vue'
import App from './App'
import store from './store'
import VuexModal from 'vuex-modal'

import 'vuex-modal/dist/vuex-modal.css'

Vue.use(VuexModal, { store: store })

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
