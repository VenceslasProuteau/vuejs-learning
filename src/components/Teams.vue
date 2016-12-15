<template>
  <ul>
    <li 
      v-for="team in teams"
      >
      {{team.location}}
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'teams',
    computed: mapGetters({
      teams: 'getTeams'
    }),
    created () {
      this.$store.dispatch('get')
    }
  }
</script>