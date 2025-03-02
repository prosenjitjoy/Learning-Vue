<script setup lang="ts">
import { ref } from 'vue';
const lists = ref([1, 2, 3, 4, 5])
var next = 6
function addRandom() {
  const i = Math.floor(Math.random() * lists.value.length)
  lists.value.splice(i, 0, next++)
}
function removeRandom() {
  const i = Math.floor(Math.random() * lists.value.length)
  lists.value.splice(i, 1)
}
</script>

<template>
  <button v-on:click="addRandom">Add at random index</button>
  <button v-on:click="removeRandom">Remove at random index</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in lists" v-bind:key="item">
      {{ item }}
    </li>
  </TransitionGroup>
</template>

<style scoped lang="css">
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>