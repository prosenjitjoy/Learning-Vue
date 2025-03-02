<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

const show = ref(false)

function onBeforeEnter(el: Element) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}
function onEnter(el: Element, done: () => void) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: "elastic.inOut(2.5, 1)",
    onComplete: done,
  })
}

function onLeave(el: Element, done: () => void) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: "elastic.inOut(2.5, 1)"
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
}

</script>

<template>
  <div>
    <button v-on:click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">Hello World!</p>
    </Transition>
    <Transition name="fade">
      <p v-if="show">Named Transitions</p>
    </Transition>
    <Transition name="slide-fade">
      <p v-if="show">Slide Fade</p>
    </Transition>
    <Transition name="bounce">
      <p v-if="show">
        Hello here is some bouncy text!
      </p>
    </Transition>
    <Transition name="nested">
      <div v-if="show" class="outer">
        <div class="inner">Hello</div>
      </div>
    </Transition>
    <Transition v-on:before-enter="onBeforeEnter" v-on:enter="onEnter" v-on:leave="onLeave" v-bind:css="false">
      <div v-if="show" class="gsap-box"></div>
    </Transition>
  </div>
</template>

<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3 ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.5s ease;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>