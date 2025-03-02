<script setup lang="ts">
const props = defineProps<{ show: boolean }>()
const emit = defineEmits(['close'])
</script>

<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>
        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">default footer</slot>
        </div>
        <button v-on:click="emit('close')">OK</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="css">
.modal-mask {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-header {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>