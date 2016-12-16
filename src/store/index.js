import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import teams from './modules/teams'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    teams
  }
})
