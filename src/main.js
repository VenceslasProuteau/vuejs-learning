import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import FooComponent from './components/FooComponent'
import store from './store'
/* eslint-disable no-new */

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: FooComponent }
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
