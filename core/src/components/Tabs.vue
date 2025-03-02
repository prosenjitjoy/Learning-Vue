<script setup lang="ts">
import { shallowRef } from 'vue'
import CompA from './CompA.vue'
import CompB from './CompB.vue'

const activeComponent = shallowRef(CompA)
</script>

<template>
  <label>
    <input type="radio" v-model="activeComponent" v-bind:value="CompA"> A
  </label>
  <label>
    <input type="radio" v-model="activeComponent" v-bind:value="CompB"> B
  </label>
  <Transition name="fade" mode="out-in">
    <KeepAlive>
      <component v-bind:is="activeComponent"></component>
    </KeepAlive>
  </Transition>
</template>

<style scoped lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>