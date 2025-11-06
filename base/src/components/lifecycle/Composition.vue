<template>
  <h1>Lifecycle Composition API</h1>
  <h2>{{ count }}</h2>

  <button @click="increment()">Increment</button>
  <button @click="decrement()">Decrement</button>
</template>

<script setup lang="ts">
// Ciclo de vida del componente en Composition API
import { onBeforeUnmount, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, type Ref, ref } from 'vue'

// -------------------------------
const count: Ref<number> = ref(0)

// methods
const increment = () => count.value++
const decrement = () => count.value--

// ------------------------------- Cycle

onBeforeMount(() => {
  console.log("Component Before Mount")
})

onMounted(() => {
  console.log("Component Mounted")
})

onBeforeUpdate(() => {
  console.log("Component Before Update")
})

onUpdated(() => console.log("Component Updated"))

onBeforeUnmount(() => {
  console.log("Component Before Unmount")
})
</script>

<style scoped>
h1 {
  text-align: center;
  color: gray;
}

h2 {
  text-align: center;
  color: darkgreen;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
}

button {
  margin: auto;
  display: block;
  background-color: darkcyan;
  border-radius: 5px;
  border: 1px solid darkcyan;
  margin-top: 1em;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  padding: 0.5em 2em;
  cursor: pointer;
}

button:hover {
  background-color: green;
  border: 1px solid green;
}
</style>
