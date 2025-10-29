<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CycleOption',
  data() {
    return {
      count: 0 as number
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  computed: {},
  watch: {},
  created() {
    console.log('Component Created')
  },
  mounted() {
    console.log('Component Mounted')
  },
  beforeUpdate() {
    console.log('Component Before Update')
  },
  updated() {
    console.log('Component Updated')
  },
  beforeUnmount() {},
  unmounted() {
    console.log('Component Unmounted')
  },
})
</script>

<template>
  <h1>Life Cycle component</h1>
  <h2>{{ count }}</h2>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<style scoped>
h1, h2 {
  text-align: center;
}

button {
  display: block;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 19px;
  margin-top: 20px;
}
</style>
