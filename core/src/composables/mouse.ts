import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(function () {
    return window.addEventListener('mousemove', update)
  })
  onUnmounted(function () {
    return window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
