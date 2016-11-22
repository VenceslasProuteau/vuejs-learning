<template>
    <li class="todo-item">
      <span v-if="!edit">{{todo.text}}</span>
      <button v-on:click="$emit('remove')">remove</button>
      <button v-on:click="edit = !edit">edit</button>
      <input
        v-if="edit"
        type="text"
        v-model="todo.text"
        v-on:keyup.enter="editTodo"
       />
    </li>
</template>

<script>
    export default {
      name: 'todoItem',
      props: ['todo'],
      components: {},
      data () {
        return {
          edit: false
        }
      },
      methods: {
        editTodo: function () {
          this.edit = false
          this.$emit('edit')
        }
      }
    }
</script>

<style scoped>
.todo-item {
  color: blue;
}
</style>