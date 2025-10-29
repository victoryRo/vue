<script setup lang="ts">
import { type Ref, ref, onMounted, onBeforeUpdate, onUpdated } from 'vue';

// -------------------------------

const count: Ref<number> = ref(0);

const increment = () => count.value++
const decrement = () => count.value--

// ---------------- cycle
onMounted(() => {
  console.log('Component Mounted')
})
onBeforeUpdate(() => {
  console.log('Component Before Update')
})
onUpdated(() => {
  console.log('Component Updated')
})
</script>

<template>
  <h1>Life Cycle composition API</h1>
  <h2>{{ count }}</h2>
  <button @click="increment">Increment</button>
  <br>
  <button @click="decrement">Decrement</button>
</template>

<style scoped>
h1,
h2 {
  text-align: center;
}

button {
  display: block;
  margin: auto;
  padding: 20px 30px;
  background-color: green;
  color: white;
  font-size: medium;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}
</style>
