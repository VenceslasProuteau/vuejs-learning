import { ROUTES } from '../constants'
import Vue from 'vue'

export default {
  get () {
    return Vue.http.get(ROUTES.PLAYERS)
      .then(response => response.body)
      .catch(error => error)
  }
}
