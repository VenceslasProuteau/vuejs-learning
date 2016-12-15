import * as types from '../mutation-types'
import api from '../../api/TeamsAPI'

const state = {
  teams: []
}

const getters = {
  getTeams: state => state.teams
}

const actions = {
  async get ({ commit }) {
    commit(types.RECEIVE_TEAMS, await api.get())
  }
}

const mutations = {
  [types.RECEIVE_TEAMS] (state, teams) {
    state.teams = teams
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

