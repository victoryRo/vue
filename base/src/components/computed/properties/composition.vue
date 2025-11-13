<template>
  <div>
    <input type="text" v-model="message">
    <h1>Composition API</h1>
    <p>Normal message</p>
    <h3>{{ message }}</h3>
    <p>Split message []string</p>
    <h3>{{ splitMsg }}</h3>
    <p>Array reverse</p>
    <h3>{{ arrayReverse }}</h3>
    <p>Join message</p>
    <h3>{{ joinMsg }}</h3>
    <p>Uppercase</p>
    <h3>{{ strUpper }}</h3>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, computed } from "vue";

const message: Ref<string> = ref('')

const splitMsg: Ref<Array<string>> = computed(() => {
  return message.value.split("")
})

const arrayReverse: Ref<Array<string>> = computed(() => {
  return message.value.split("").reverse()
})

const joinMsg: Ref<string> = computed(() => {
  return message.value.split("").reverse().join('')
})

const strUpper: Ref<string> = computed(() => message.value.toUpperCase())

// las propiedades computadas actuan como si fueran variables reactivas
// encapsulando un comportamiento especifico y dinamico
// se llama directamente en el codigo html por el nombre dado a la function
</script>

<style scoped></style>
