<template>
    <ul class="todo-list">
      <div>Still {{stillTodoCount}} tasks to do:</div>
      <TodoItem 
        v-for="todo in stillTodoList"
        v-bind:todo="todo"
        v-on:remove="remove(todo.id)"
        v-on:edit="edit(todo.id, todo.text)"
        >
        </TodoItem>
        <br />
        <div>{{doneTodosCount}} tasks done:</div>
        <TodoItem 
          v-for="todo in doneTodos"
          v-bind:todo="todo"
          v-on:remove="remove(todo.id)"
          v-on:edit="edit(todo.id, todo.text)"
          >
          </TodoItem>
        <input 
          type="text" 
          placeholder="Add New todo"
          v-model="newTodo"
          v-on:keyup.enter="add"
          />
          <span>{{count}}</span>
          <br />
        <button @click="decrement">decrement</button>
        <button @click="increment">increment</button>
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
        count () {
          return this.$store.state.count
        },
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
        ...mapMutations({
          increment: {
            type: 'increment',
            amount: 10
          },
          decrement: {
            type: 'decrement',
            amount: 5
          }
        }),
        add: function () {
          this.todos.push({
            id: Math.random(),
            text: this.newTodo,
            done: false
          })
          this.newTodo = ''
        },
        edit: function (id, value) {
          const todoIndex = this.todos.findIndex(todo => {
            return todo.id === id
          })
          this.todos[todoIndex].text = value
        },
        remove: function (id) {
          const todoIndex = this.todos.findIndex(todo => {
            return todo.id === id
          })
          if (this.todos[todoIndex].done) {
            this.todos.splice(todoIndex, 1)
          } else {
            this.todos[todoIndex].done = true
          }
        }
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