<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const emit = defineEmits<{
  increment: [count: number]
}>()

function handleClick() {
  count.value += 1
  emit('increment', count.value)
}
</script>

<template>
  <button v-on:click="handleClick">Increment</button>
</template>