import * as types from '../mutation-types'

const state = {
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
}

const getters = {
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
}

const mutations = {
  [types.REMOVE_TODO] (state, todo) {
    const todoIndex = state.todos.indexOf(todo)
    if (state.todos[todoIndex].done) {
      state.todos.splice(todoIndex, 1)
    } else {
      state.todos[todoIndex].done = true
    }
  },
  [types.EDIT_TODO] (state, todo) {
    const todoIndex = state.todos.indexOf(todo)
    state.todos[todoIndex].text = todo.text
  },
  [types.ADD_TODO] (state, text) {
    state.todos.push({
      id: Math.random(),
      done: false,
      text
    })
  }
}

export default {
  state,
  getters,
  mutations
}

