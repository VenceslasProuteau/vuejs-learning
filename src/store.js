import Vue from 'vue'
import Vuex from 'vuex'
import { DECREMENT, INCREMENT } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        text: 'first item',
        done: true
      },
      {
        id: 2,
        text: 'second item',
        done: false
      },
      {
        id: 3,
        text: 'third item',
        done: true
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    stillTodoList: state => {
      return state.todos.filter(todo => !todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    stillTodoCount: (state, getters) => {
      return getters.stillTodoList.length
    }
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
