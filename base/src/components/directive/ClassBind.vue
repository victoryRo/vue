<script setup lang="ts">
import { type Ref, ref } from 'vue'

const hasError: Ref = ref(false)
const c: Ref = ref('#fff')

const handleClick = () => c.value = 'yellow';
const handleMsg = () => hasError.value = true;
</script>

<template>
  <div>
    <h1>Class Binding</h1>
    <p :class="{ 'danger': hasError }">The message was sent correctly</p>
    <button @click="handleMsg">Click Me!</button>
  </div>
  <hr>
  <div>
    <h1>Style Binding</h1>
    <p :style="{ backgroundColor: 'gray', color: c }">Hello we are test style with VUE</p>
    <button @click="handleClick">Change color</button>
  </div>
</template>

<style scoped>
.danger {
  color: red;
}

button {
  border: solid 1px dodgerblue;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: dodgerblue;
  color: white;
  cursor: pointer;
  font-size: large;
}

button:hover {
  background-color: deepskyblue;
}
</style>
