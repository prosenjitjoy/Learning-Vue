<script setup lang="ts">
import { store } from '../composables/store'
</script>

<template>
  <div>
    <p>Component A</p>
    <p>Count: {{ store.count }}</p>
    <button v-on:click="store.count++">+</button>
  </div>
</template>