<template>
  <div>
    <label for="subtotal">Subtotal</label>
    <input type="number" v-model="subtotal">
    <h3>Total value {{ subtotal }}</h3>
    <h3>Total tax {{ totalTAX }} - (%{{ iva }})</h3>
    <h3>Total + tax {{ total }}</h3>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, computed } from "vue";

const iva = 19
const subtotal: Ref<number> = ref(0)

const totalTAX: Ref<number> = computed(() => {
  return (subtotal.value * iva) / 100
})

const total: Ref<number> = computed(() => {
  return subtotal.value + totalTAX.value
})
</script>

<style scoped></style>
