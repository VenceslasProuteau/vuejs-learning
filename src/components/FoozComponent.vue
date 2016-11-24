<template>
    <div>
      {{todos}}
    </div>
</template>

<script>
  export default {
    name: 'foozComponent',
    components: {},
    data () {
      return {}
    },
    computed: {
      todos () {
        return 'Fooz'
      }
    }
  }
</script>