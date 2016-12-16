<template>
  <div id="app">
  <header></header>
   <!--  <router-link to="/players">Display players</router-link>
    <router-view></router-view> -->
    <Teams></Teams>
  </div>
</template>

<script>
import Teams from './Teams'
export default {
  name: 'app',
  components: {
    Teams
  },
  data () {
    return {}
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  height: 5rem;
  background: #4c1569;
  color: #efaf2b;
  box-shadow: 0 2px 2px 0 #efaf2b;
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
