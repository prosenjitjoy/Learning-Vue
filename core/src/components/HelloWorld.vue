<script setup lang="ts">
const prop = defineProps(["title"])
const emit = defineEmits(['enlarge-text'])
</script>

<template>
  <div class="blog-post">
    <h1>{{ prop.title }}</h1>
    <button v-on:click="emit('enlarge-text')">Enlarge text</button>
  </div>
</template>