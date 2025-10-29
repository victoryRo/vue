<script setup lang="ts">
import { type Ref, ref } from 'vue'

const Countries: Ref<Array<string>> = ref([
  'Brazil',
  'Argentina',
  'Colombia',
  'Venezuela',
  'Peru',
  'Chile',
  'Uruguay',
  'Ecuador',
  'Bolivia',
  'Paraguay'
])

interface ILenguage {
  code: string;
  name: string;
}

const Languages: Ref<Array<ILenguage>> = ref([
  { code: "en-US", name: "English" },
  { code: "fr-FR", name: "France" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japan" },
  { code: "ko", name: "Korean" },
  { code: "nl", name: "Nevada" },
  { code: "zh-CN", name: "Chinese" },
])

// v-bind:key  podemos abreviarla con :key
</script>

<template>
  <h2>List of countries</h2>
  <div class="content">
    <ul>
      <li v-for="(c, index) in Countries" :key="index">
        <span class="elem">{{ c }}</span>
      </li>
    </ul>
  </div>
  <br>
  <h2>Languages</h2>
  <div class="content">
    <ul>
      <li v-for="leng in Languages" :key="leng.code">
        <span class="elem">{{ leng.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: dodgerblue;
}

.content {
  max-width: 20%;
  background-color: azure;
  padding: 15px;
  border: 1px solid dodgerblue;
}

.elem {
  font-family: Helvetica, Arial, sans-serif;
  color: dodgerblue;
  font-size: 1.2em;
}
</style>
