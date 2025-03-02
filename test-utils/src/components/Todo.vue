<script setup lang="ts">
import { ref, reactive } from 'vue'

const newTodo = ref('')
const todos = reactive([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  }
])

function createTodo() {
  todos.push({
    id: 2,
    text: newTodo.value,
    completed: false,
  })
  newTodo.value = ''
}
</script>

<template>
  <div v-for="todo in todos" v-bind:class="[{ completed: todo.completed }]" data-test="todo">
    {{ todo.text }}
    <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox">
  </div>

  <form v-on:submit.prevent="createTodo" data-test="form">
    <input type="text" v-model="newTodo" data-test="new-todo">
  </form>
</template>
