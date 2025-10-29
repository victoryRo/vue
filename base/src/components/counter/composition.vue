<script setup lang="ts">
// Composition API
import { type Ref, ref } from 'vue'
// --------------------------------------|

const count: Ref = ref(0)

const addone = (): void => {
  count.value++
};

const restone = (): void => {
  count.value--
};
</script>

<template>
  <h2>{{ count }}</h2>
  <button class="btn" @click="addone">Increment</button>
  <br />
  <button class="btn" @click="restone">Decrement</button>
</template>

<style scoped>
h2 {
  color: darkblue;
}

.btn {
  font-size: 1rem;
  padding: 0.2rem 1rem;
  border: 1px solid orange;
  border-radius: 5px;
  margin: 0.5rem;
}

.btn:hover {
  background-color: orange;
  color: white;
  border: 1px solid grey;
  cursor: pointer;
}
</style>
