<script setup lang="ts">
import { type Ref, ref, computed } from "vue";

const vat: Ref<number> = ref(21);
const subTotal: Ref<number> = ref(0);

const totalVat: Ref<number> = computed(
  () => (subTotal.value * vat.value) / 100,
);
</script>

<template>
  <div>
    <label for="subTotal">Subtotal</label>
    <input type="text" v-model="subTotal" />
    <h3>Total taxes to pay: {{ totalVat }} Vat ( {{ vat }}% )</h3>
  </div>
</template>

<style lang="scss" scoped></style>
