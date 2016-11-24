<template>
    <div>
      {{todos}}
    </div>
</template>

<script>
  export default {
    name: 'bazComponent',
    components: {},
    data () {
      return {}
    },
    computed: {
      todos () {
        return 'baz'
      }
    }
  }
</script>