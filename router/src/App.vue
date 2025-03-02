<script setup lang="ts">
import {ref} from 'vue'
import { useRoute } from 'vue-router'
// const router = useRouter()
const route = useRoute()
const name = ref("erina")
</script>

<template>
<h1>Hello App!</h1>
<p><strong>Current route path:</strong>{{ route.fullPath }}</p>
<RouterLink v-bind:to="`/home/${name}`"> <!-- e.g /home/erina -->
  User profile
</RouterLink>
<RouterView></RouterView>
<div>
  <RouterLink to="/users/elarbor">/users/elarbor</RouterLink><br>
  <RouterLink to="/users/elarbor/profile">/users/elarbor/profile</RouterLink><br>
  <RouterLink to="/users/elarbor/posts">/users/elarbor/posts</RouterLink><br>
</div>

<ul>
  <li>
    <RouterLink to="/named">First page</RouterLink>
  </li>
  <li>
    <RouterLink to="/other">Second page</RouterLink>
  </li>
</ul>

<RouterView name="main"></RouterView>
<RouterView name="leftSidebar"></RouterView>
<RouterView name="rightSidebar"></RouterView>
</template>
