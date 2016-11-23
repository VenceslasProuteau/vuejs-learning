<template>
    <ul class="todo-list">
      <div>Still {{stillTodoCount}} tasks to do:</div>
      <TodoItem 
        v-for="todo in stillTodoList"
        v-bind:todo="todo"
        v-on:remove="removeTodo(todo)"
        v-on:edit="editTodo(todo)"
        >
        </TodoItem>
        <br />
        <div>{{doneTodosCount}} tasks done:</div>
        <TodoItem 
          v-for="todo in doneTodos"
          v-bind:todo="todo"
          v-on:remove="removeTodo(todo)"
          v-on:edit="editTodo(todo)"
          >
          </TodoItem>
        <input 
          type="text" 
          placeholder="Add New todo"
          v-model="newTodo"
          v-on:keyup.enter="addTodo(newTodo)"
          />
    </ul>
</template>

<script>
    import TodoItem from './TodoItem'
    import { mapMutations, mapGetters } from 'vuex'

    export default {
      name: 'todoList',
      components: {
        TodoItem
      },
      computed: {
        todos () {
          return this.$store.state.todos
        },
        ...mapGetters(['doneTodos', 'stillTodoList', 'doneTodosCount', 'stillTodoCount'])
      },
      data () {
        return {
          newTodo: ''
        }
      },
      methods: {
        ...mapMutations(['addTodo', 'removeTodo', 'editTodo'])
      }
    }
</script>

<style scoped>
.todo-list{
  width: 30%;
  margin: 0 auto;
  padding: 1rem;
  background: #efefef;
  border-radius: .3rem;
  color: #5f6061;
}
</style>