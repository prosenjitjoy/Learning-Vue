<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const currentPath = ref(window.location.hash)

function update() {
  currentPath.value = window.location.hash
}

onMounted(function () {
  return window.addEventListener('hashchange', update)
})

onUnmounted(function () {
  return window.removeEventListener('hashchange', update)
})

const currentView = computed(() => {
  switch (currentPath.value.slice(1)) {
    case "/":
      return HomeView
    case "/about":
      return AboutView
    default:
      return NotFoundView
  }
})
</script>

<template>
  <a href="#/">Home</a>
  <a href="#/about">About</a>
  <a href="#/non-existent-path">Broken Link</a>
  <component v-bind:is="currentView"></component>
</template>