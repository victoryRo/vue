<script lang="ts">
import { defineComponent } from 'vue'

// Opton API
export default defineComponent({
  name: 'CounterOption',
  components: {},
  props: {},

  data() {
    const counter = 0
    return {
      counter
    }
  },

  methods: {
    increment() {
      return this.counter++
    },

    decrement() {
      return this.counter--
    }
  },
})
</script>

<template>
  <h3>{{ counter }}</h3>

  <button class="btn" @click="increment">Increment</button>
  <br>
  <button class="btn" @click="decrement">Decrement</button>
</template>


<style scoped>
h3 {
  color: dodgerblue;
}

.btn {
  font-size: 1rem;
  padding: 0.2rem 1rem;
  border: 1px solid coral;
  border-radius: 5px;
  margin: 0.5rem;
}

.btn:hover {
  background-color: coral;
  color: white;
  border: 1px solid cornflowerblue;
  cursor: pointer;
}
</style>
