<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ minLenght: number }>()

const password = ref('')
const error = computed(function () {
  if (password.value.length < props.minLenght) {
    return "Password must be at least " + props.minLenght + " characters."
  }
  return null
})
</script>

<template>
  <div>
    <input type="password" v-model="password">
    <div v-if="error" data-test="error">{{ error }}</div>
  </div>
</template>