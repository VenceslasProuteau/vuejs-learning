<template>
    <div>
      {{todos}}
    </div>
</template>

<script>
  export default {
    name: 'fooComponent',
    components: {},
    data () {
      return {}
    },
    computed: {
      todos () {
        return this.$store.state.todos
      }
    }
  }
</script>