<script setup lang="ts">
import { ref, computed } from 'vue'
import gsap from 'gsap'

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' },
]

const query = ref('')

const computedList = computed(function () {
  return list.filter(function (item) {
    return item.msg.toLowerCase().includes(query.value)
  })
})

function onBeforeEnter(el: Element) {
  const elem = el as HTMLElement
  elem.style.opacity = "0"
  elem.style.height = "0"
}

function onEnter(el: Element, done: () => void) {
  const elem = el as HTMLElement
  if (elem.dataset.index) {
    gsap.to(elem, {
      opacity: 1,
      height: '1.6em',
      delay: parseInt(elem.dataset.index, 10) * 0.15,
      onComplete: done
    })
  }
}

function onLeave(el: Element, done: () => void) {
  const elem = el as HTMLElement
  if (elem.dataset.index) {
    gsap.to(elem, {
      opacity: 0,
      height: 0,
      delay: parseInt(elem.dataset.index, 10) * 0.15,
      onComplete: done
    })
  }
}
</script>

<template>
  <input type="text" v-model="query">
  <TransitionGroup tag="ul" v-bind:css="false" v-on:before-enter="onBeforeEnter" v-on:enter="onEnter" v-on:leave="onLeave">
    <li v-for="(item, index) in computedList" v-bind:key="item.msg" v-bind:data-index="index">
      {{ item.msg }}
    </li>
  </TransitionGroup>
</template>