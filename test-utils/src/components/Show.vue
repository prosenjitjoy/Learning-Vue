<script setup lang="ts">
import { ref } from 'vue'

const { show = true } = defineProps<{ show: boolean }>()
const greeting = ref('hello')
</script>

<template>
  <div v-if="show">{{ greeting }}</div>
</template>