import Vue from 'vue'
import Vuex from 'vuex'
import { DECREMENT, INCREMENT } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [INCREMENT] (state, payload) {
      state.count += payload.amount
    },
    [DECREMENT] (state, payload) {
      state.count -= payload.amount
    }
  }
})

export default store
