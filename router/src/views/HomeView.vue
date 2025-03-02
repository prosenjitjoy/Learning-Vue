<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router';
defineProps<{ id: string }>()

onBeforeRouteLeave(function (_to, _from) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (!answer) {
    return false
  }
}) 
</script>
<template>
  <main>
    <p>Hello World</p>
    <div>{{ id }}</div>
  </main>
</template>