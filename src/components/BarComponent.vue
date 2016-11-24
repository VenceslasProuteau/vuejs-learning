<template>
    <div>
      {{todos}}
    </div>
</template>

<script>
  export default {
    name: 'barComponent',
    components: {},
    data () {
      return {}
    },
    computed: {
      todos () {
        return 'bar'
      }
    }
  }
</script>