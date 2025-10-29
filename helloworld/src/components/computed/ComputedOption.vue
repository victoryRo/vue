<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComputedOption",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    reverseArray(): Array<string> {
      return this.message.split("");
    },
    strReverse(): Array<string> {
      return this.message.split("").reverse();
    },
    strMessage(): string {
      return this.message.split("").reverse().join("");
    },
  },
});
</script>

<template>
  <div>
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <h3>{{ reverseArray }}</h3>
    <h3>{{ strReverse }}</h3>
    <h4>{{ strMessage }}</h4>
  </div>
</template>

<style scoped></style>
