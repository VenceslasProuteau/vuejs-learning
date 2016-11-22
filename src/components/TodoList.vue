<template>
    <ul class="todo-list">
      <TodoItem 
        v-for="(todo, index) in todolist"
        v-bind:todo="todo"
        v-on:remove="remove(index)"
        v-on:edit="edit(index, todo.name)"
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
    import { mapMutations } from 'vuex'

    export default {
      name: 'todoList',
      components: {
        TodoItem
      },
      computed: {
        count () {
          return this.$store.state.count
        }
      },
      data () {
        return {
          newTodo: '',
          todolist: [
            {
              name: 'First item'
            },
            {
              name: 'Second item'
            },
            {
              name: 'Third item'
            }
          ]
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
          this.todolist.push({
            name: this.newTodo
          })
          this.newTodo = ''
        },
        edit: function (index, value) {
          this.todolist[index].name = value
        },
        remove: function (index) {
          this.todolist.splice(index, 1)
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