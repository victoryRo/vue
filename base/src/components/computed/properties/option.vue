<template>
  <div>
    <input type="text" v-model="message">
    <h1>Option API</h1>
    <p>Normal message</p>
    <h3>{{ message }}</h3>
    <p>Split message []string</p>
    <h3>{{ splitMsg }}</h3>
    <p>Array reverse</p>
    <h3>{{ arrayReverse }}</h3>
    <p>Join message</p>
    <h3>{{ joinMsg }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: '',
    };
  },
  computed: {
    splitMsg(): Array<string> {
      return this.message.split("");
    },
    arrayReverse(): Array<string> {
      return this.message.split("").reverse();
    },
    joinMsg(): string {
      return this.message.split("").reverse().join("");
    }
  },
})
</script>

<style scoped></style>
