<script setup lang="ts">
import { reactive } from 'vue'
import { type FormType } from '../composables/types';

const form = reactive({
  email: '',
  description: '',
  city: '',
  subscribe: false,
  interval: '',
})

const emit = defineEmits<{
  submit: [form: FormType]
}>()

async function submit() {
  emit('submit', form)
}

</script>

<template>
  <form v-on:submit.prevent="submit">
    <input type="email" v-model="form.email"></input>

    <textarea v-model="form.description"></textarea>

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow"></option>
    </select>

    <input type="checkbox" v-model="form.subscribe"></input>

    <input type="radio" value="weekly" v-model="form.interval"></input>
    <input type="radio" value="monthly" v-model="form.interval"></input>

    <button type="submit">Submit</button>
  </form>
</template>