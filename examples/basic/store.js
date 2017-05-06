import Vue from 'vue'
import Vuex from 'vuex'
import { modalModule } from 'vuex-modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal: modalModule
  }
})
