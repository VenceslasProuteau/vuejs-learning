<template>
  <div id="app">
    <img src="../assets/logo.png">
    <TodoList></TodoList>
    <router-link to="/foo">Nav to Foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoList from './TodoList'
export default {
  name: 'app',
  components: {
    TodoList
  },
  data () {
    return {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
