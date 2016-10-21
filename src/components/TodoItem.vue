<template>
    <li class="todo-item">
      <span v-if="!edit">{{todo.name}}</span>
      <button v-on:click="$emit('remove')">remove</button>
      <button v-on:click="edit = !edit">edit</button>
      <input
        v-if="edit"
        type="text"
        v-model="todo.name"
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