<template>
    <ul class="todo-list">
      <TodoItem 
        v-for="(todo, index) in todos"
        v-bind:todo="todo"
        v-on:remove="remove(index)"
        v-on:edit="edit(index, todo.text)"
        >
        </TodoItem>
        <input 
          type="text" 
          placeholder="Add New todo"
          v-model="newTodo"
          v-on:keyup.enter="add"
          />
          <span>{{count}}</span>
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
        ...mapGetters(['doneTodos'])
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
            id: Math.random(10, 100),
            text: this.newTodo,
            done: false
          })
          this.newTodo = ''
        },
        edit: function (index, value) {
          console.log(this.todos[index])
          this.todos[index].text = value
        },
        remove: function (index) {
          this.todos.splice(index, 1)
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