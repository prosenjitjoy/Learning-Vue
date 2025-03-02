<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="user">
    <h2>User {{ route.params.username }}</h2>
  </div>
  <RouterView></RouterView>
</template>