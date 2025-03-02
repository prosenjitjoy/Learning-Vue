<script setup lang="ts">
import { ref, reactive, computed, watch, useTemplateRef, watchEffect, onMounted, provide } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import AlertBox from './components/AlertBox.vue'
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
import Archive from './components/Archive.vue'
import Inject from './components/Inject.vue'
import MouseTracker from './components/MouseTracker.vue'
import UseFetch from './components/UseFetch.vue'
import Transitions from './components/Transitions.vue'
import Tabs from './components/Tabs.vue'
import TransitionGroups from './components/TransitionGroups.vue'
import SearchFilter from './components/SearchFilter.vue'
import MyModal from './components/MyModal.vue'
import MyRouter from './components/MyRouter.vue'
import TemplateRef from './components/TemplateRef.vue'

const count = ref(2)
const state = reactive({ seen: true })

const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery"
  ]
})

const type = ref("D")

const data = reactive({
  firstName: "John",
  lastName: "Doe"
})

const fullName = computed({
  get() {
    return data.firstName + " " + data.lastName
  },
  set(newValue) {
    [data.firstName, data.lastName] = newValue.split(' ')
  }
})

fullName.value = "Jane Doe"
const publishedBooksMessage = computed(function () {
  return author.books.length > 0 ? "Yes" : "No"
})

const alwaysSmall = computed(function (prev) {
  if (count.value <= 3) {
    return count.value
  }
  return prev
})

const numbers = ref([0, 1, 2, 3, 4, 5])
const evenNumbers = computed(function () {
  return numbers.value.filter(function (n) {
    return n % 2 == 0
  })
})

function greet(event: Event) {
  alert("Hello " + author.name)
  if (event) {
    alert((event.target as HTMLInputElement).textContent)
  }
}

const message = ref("")
const checked = ref(true)
const checkedNames = ref([])
const picked = ref("Two")
const selected = ref("")
const selectedMulti = ref([])
const selectedFor = ref("D")
const options = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
])

const question = ref("")
const answer = ref("Question usually contain a question mark. ;-)")
const loading = ref(false)

watch(question, async function (newQuestion) {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = "Thinking..."
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error
    } finally {
      loading.value = false
    }
  }
})

const input = useTemplateRef("my-input")
watchEffect(function () {
  if (input.value) {
    input.value.focus()
  }
})

const list = ref([
  "i", "me", "you"
])
const itemRefs = useTemplateRef("items")
onMounted(function () {
  console.log(itemRefs.value)
})

const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Bloggin with Vue" },
  { id: 3, title: "Why Vue is so fun" },
])

const postFontSize = ref(1)
const currentTab = ref("Home")
const tabs = ["Home", "Posts", "Archive"]
const currentTabComponent = computed(function () {
  switch (currentTab.value) {
    case "Home":
      return Home
    case "Posts":
      return Posts
    case "Archive":
      return Archive
  }
})

provide(/*key*/ 'message', /*value*/ 'hello!')

const location = ref("North Pole")
function updateLocation() {
  location.value = 'South Pole'
}
provide('location', {
  location,
  updateLocation,
})


</script>

<template>
  <p v-if="state.seen">Now you see me</p>
  <p>Has published books: <span>{{ publishedBooksMessage }}</span></p>
  <p>{{ data.firstName }}</p>
  <p>{{ alwaysSmall }}</p>
  <!-- <div :class="[{ activeClass: isActive }, errorClass]"></div> -->
  <div v-if="type == 'A'">A</div>
  <div v-else-if="type == 'B'">B</div>
  <div v-else-if="type == 'C'">C</div>
  <div v-else>Not A/B/C</div>

  <li v-for="(item, index) in author" :key="index">
    <p v-if="typeof item == 'string'">{{ item }}</p>
    <span v-else v-for="book in item">{{ book }}</span>
  </li>

  <li v-for="(value, key) in author">
    {{ key }}: {{ value }}
  </li>

  <span v-for="n in 10">{{ n }}</span>
  <li v-for="n in evenNumbers">{{ n }}</li>
  <button v-on:click="greet">Greet</button>

  <p>Message is: {{ message }}</p>
  <input type="text" v-model="message" placeholder="edit me"></input>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>

  <div>Checked names: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>

  <div>Picked: {{ picked }}</div>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>

  <div>Selected: {{ selected }}</div>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
  </select>

  <div>Selected: {{ selectedMulti }}</div>
  <select v-model="selectedMulti" multiple>
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
  </select>

  <div>Selected: {{ selectedFor }}</div>
  <select v-model="selectedFor">
    <option v-for="option in options" v-bind:value="option.value">
      {{ option.text }}
    </option>
  </select>

  <p>Ask a yes/no question: <input v-model="question" v-bind:disabled="loading"></p>
  <p>{{ answer }}</p>

  <input type="text" ref="my-input">
  <ul>
    <li v-for="item in list" ref="items">{{ item }}</li>
  </ul>

  <HelloWorld title="Hello World!"></HelloWorld>

  <div :style="{ fontSize: postFontSize + 'em' }">
    <HelloWorld v-for="post in posts" v-bind:title="post.title" v-on:enlarge-text="postFontSize += 0.1"></HelloWorld>
  </div>

  <AlertBox>Something bad happened.</AlertBox>

  <div class="demo">
    <button v-for="tab in tabs" v-on:click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="currentTabComponent" class="tab"></component>
  </div>

  <Inject></Inject>
  <Transitions></Transitions>

  <MouseTracker></MouseTracker>
  <UseFetch></UseFetch>

  <TransitionGroups></TransitionGroups>


  <SearchFilter></SearchFilter>
  <Tabs></Tabs>

  <MyModal></MyModal>
  <MyRouter></MyRouter>

  <TemplateRef></TemplateRef>
</template>
