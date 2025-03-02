<script setup lang="ts">
// import { reactive, onMounted, onUnmounted } from 'vue'
// const point = reactive({
//   x: 0,
//   y: 0,
// })

// function update(event: MouseEvent) {
//   point.x = event.pageX
//   point.y = event.pageY
// }

// onMounted(function () {
//   return window.addEventListener('mousemove', update)
// })
// onUnmounted(function () {
//   return window.removeEventListener('mousemove', update)
// })

import { useMouse } from '../composables/mouse'
const { x, y } = useMouse()
</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}
</template>