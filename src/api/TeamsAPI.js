import { ROUTES } from '../constants'
import Vue from 'vue'

export default {
  get () {
    return Vue.http.get(ROUTES.TEAMS)
      .then(response => Promise.resolve(response.body))
      .catch(error => Promise.reject(error))
  },
  getTeam (id) {
    return Vue.http.get(`${ROUTES.TEAMS}/${id}`)
      .then(response => Promise.resolve(response.body))
      .catch(error => Promise.reject(error))
  }
}
