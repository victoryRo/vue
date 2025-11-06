<template>
  <div>
    <h1>Class Binding</h1>
    <p :class="{ 'danger': hasError }">The message was sent correctly</p>
    <button @click="handleMsg">Click danger</button>
    <br>
    <p :class="classObj">The message was sent correctly</p>
    <button @click="handlerWarning">Click warning</button>
  </div>
  <hr>
  <div>
    <h1>Style Binding</h1>
    <p :style="{ backgroundColor: 'gray', color: c }">Hello we are test style with VUE</p>
    <button @click="handleClick">Change color</button>
    <br>
    <p :style="styleObj">I am a new style object. Not inline</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, type Ref, ref } from 'vue'

const hasError: Ref = ref(false)
const c: Ref = ref('#fff')

const handleClick = () => c.value = 'yellow';
const handleMsg = () => hasError.value = true;

// el objeto de clase no tiene que estar en linea
const classObj = reactive({
  active: true,
  'text-warning': false,
})

const handlerWarning = () => classObj['text-warning'] = true;

// objeto type style para plantillas mas limpias
const styleObj = reactive({
  color: 'green',
  fontSize: '20px',
})
</script>

<style scoped>
.danger {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  background-color: red;
  color: #fafafa;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0.5rem 1rem;

}

.text-warning {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  background-color: orange;
  color: #232323;
  border: solid 1px darkgoldenrod;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

button {
  display: block;
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
