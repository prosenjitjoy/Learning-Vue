<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'

const open = ref(false)
</script>

<!-- <template>
  <button v-on:click="open = true">Open Modal</button>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button v-on:click="open = false">Close</button>
    </div>
  </Teleport>
</template> -->

<template>
  <button v-on:click="open = true">Show Model</button>
  <Teleport to="body">
    <Modal v-bind:show="open" v-on:close="open = false">
      <template v-slot:header>
        <h3>Custom Header</h3>
      </template>
    </Modal>
  </Teleport>
</template>

<!-- <style scoped lang="css">
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style> -->