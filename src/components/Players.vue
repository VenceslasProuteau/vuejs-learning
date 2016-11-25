<template>
  <ul>
    <li v-for="player in players">
      {{player.name}}
    </li>
  </ul>
</template>

<script>
  import PlayersAPI from '../api/PlayersAPI'
  export default {
    name: 'players',
    components: {},
    data () {
      return {
        players: []
      }
    },
    created () {
      PlayersAPI.get()
        .then(players => {
          this.players = players
        })
    }
  }
</script>