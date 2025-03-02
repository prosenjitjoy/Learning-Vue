<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

type FooType = InstanceType<typeof Foo>
type BarType = InstanceType<typeof Bar>

const compRef = useTemplateRef<FooType | BarType>('comp')
onMounted(function() {
  console.log(compRef.value)
})
</script>

<template>
  <component v-bind:is="Math.random() > 0.5 ? Foo : Bar" ref="comp"></component>
</template>