import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
/* eslint-disable no-new */

Vue.use(VueRouter)

const Foo = r => require.ensure([], () => r(require('./components/FooComponent')), 'group-foo')
const Bar = r => require.ensure([], () => r(require('./components/BarComponent')), 'group-bar')
const Baz = r => require.ensure([], () => r(require('./components/BazComponent')), 'group-bar')
const Fooz = r => require.ensure([], () => r(require('./components/FoozComponent')), 'group-foo')

const routes = [
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/fooz',
    component: Fooz
  },
  {
    path: '/bar',
    component: Bar
  },
  {
    path: '/baz',
    component: Baz
  }
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
