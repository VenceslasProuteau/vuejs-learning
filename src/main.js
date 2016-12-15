import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// import components
import App from './components/App'

// import services
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)

/* const routes = [
  { path: '/players', component: Players }
]

const router = new VueRouter({
  routes
}) */

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
/*  router, */
  store
}).$mount('#app')
