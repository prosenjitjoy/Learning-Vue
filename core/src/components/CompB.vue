<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../composables/store'
const msg = ref("")
</script>

<template>
  <div>
    <p>Component B</p>
    <p>Count: {{ store.count }}</p>
    <span>Message is: {{ msg }}</span>
    <input v-model="msg">
  </div>
</template>