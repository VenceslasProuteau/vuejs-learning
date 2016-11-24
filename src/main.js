import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import FooComponent from './components/FooComponent'
import store from './store'

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
