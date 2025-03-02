<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const emit = defineEmits<{
  submit: [email: string]
}>()

function submit() {
  emit('submit', email.value)
}
</script>

<template>
  <div>
    <input type="email" v-model="email">
    <button v-on:click="submit">Submit</button>
  </div>
</template>