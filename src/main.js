import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import TodoList from './components/TodoList'
import store from './store'
/* eslint-disable no-new */

Vue.use(VueRouter)

const routes = [
  { path: '/todos', component: TodoList }
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
}).$mount('#app')
