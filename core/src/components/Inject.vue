<script setup lang="ts">
import { inject, type Ref } from 'vue'
const message = inject('message', 'default value')

type LocationInject = {
  location: Ref<string, string>;
  updateLocation: () => void;
}
const { location, updateLocation } = <LocationInject>inject('location')
</script>

<template>
  <h1>{{ message }}</h1>
  <button v-on:click="updateLocation">{{ location }}</button>
</template>