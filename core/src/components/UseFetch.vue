<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '../composables/fetch';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
const id = ref(1)
const url = computed(function () {
  return baseUrl + id.value
})

const { data, error } = useFetch(url)
function retry() {
  id.value = 1
  error.value = null
}
</script>

<template>
  <div>
    Load post id:
    <button v-for="i in 5" v-on:click="id = i">{{ i }}</button>
  </div>

  <div v-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
    <button v-on:click="retry">Retry</button>
  </div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>
    Loading...
  </div>
</template>