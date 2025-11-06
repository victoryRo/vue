<template>
  <h1>Model From</h1>

  <form action="">
    <input type="text" v-model="msg" />
    <br><br>
    <input type="checkbox" v-model="agree" /> Accept terms and conditions
    <br><br>
    <select v-model="country">
      <option v-for="(item, index) in countries" :key="index" :value="item">{{ item }}</option>
    </select>
  </form>
  <br>
  <hr>
  <h3>Input message: {{ msg }}</h3>
  <h3>Accept terms and conditions: {{ agree }}</h3>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'

const msg: Ref<string> = ref('')
const agree: Ref<boolean> = ref(false)
const country: Ref<string> = ref('Colombia')

const countries: Ref<Array<string>> = ref([
  "Brazil",
  "Panama",
  "Colombia",
  "Venezuela",
  "Peru",
  "Chile",
  "Uruguay",
  "Ecuador",
  "Bolivia",
  "Paraguay"
])
</script>

<style scoped></style>
