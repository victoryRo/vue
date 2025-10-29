<script setup lang="ts">
import { computed, type Ref, ref } from "vue";
// -----------------------------------------------

const message: Ref<string> = ref("");

const strArray: Ref<Array<string>> = computed(() => {
  return message.value.split("");
});

const arrayReverse: Ref<Array<string>> = computed(() => {
  return message.value.split("").reverse();
});

const strReverse: Ref<string> = computed(() => {
  return message.value.split("").reverse().join("");
});

const upperStr: Ref<string> = computed(() => {
  return message.value.toUpperCase();
});
</script>

<template>
  <div>
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <h3>{{ strArray }}</h3>
    <h3>{{ arrayReverse }}</h3>
    <h3>{{ strReverse }}</h3>
    <h3>{{ upperStr }}</h3>
  </div>
</template>

<style scoped></style>
