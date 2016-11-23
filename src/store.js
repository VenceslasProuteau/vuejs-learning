import Vue from 'vue'
import Vuex from 'vuex'
import { REMOVE_TODO, EDIT_TODO, ADD_TODO } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
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
    [REMOVE_TODO] (state, todo) {
      const todoIndex = state.todos.indexOf(todo)
      if (state.todos[todoIndex].done) {
        state.todos.splice(todoIndex, 1)
      } else {
        state.todos[todoIndex].done = true
      }
    },
    [EDIT_TODO] (state, todo) {
      const todoIndex = state.todos.indexOf(todo)
      state.todos[todoIndex].text = todo.text
    },
    [ADD_TODO] (state, text) {
      state.todos.push({
        id: Math.random(),
        done: false,
        text
      })
    }
  }
})

export default store
