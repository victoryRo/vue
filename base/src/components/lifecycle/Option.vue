<template>
  <h1>Lifecycle Option</h1>
  <h2>{{ count }}</h2>

  <button @click="increment()">Increment</button>
  <button @click="decrement()">Decrement</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Option',
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

  // lifecycle
  // el ciclo de vida de los componentes
  // es util para realizar acciones al crear, montar, actualizar y desmontar un componente
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
  beforeUnmount() {
    console.log('Component Before Unmount')
  },
  unmounted() {
    console.log('Component Unmounted')
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
  color: gray;
}

h2 {
  text-align: center;
  color: blue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
}

button {
  margin: auto;
  display: block;
  background-color: cornflowerblue;
  border-radius: 5px;
  border: 1px solid cornflowerblue;
  margin-top: 1em;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  padding: 0.5em 2em;
  cursor: pointer;
}
</style>
