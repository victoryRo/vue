<template>
  <div class="main">
    <h1 v-font-size="45" v-text-trans="'uppercase'">Payment Invoice</h1>

    <div v-bg:bl class="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listPayment" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.quantity }}</td>
          </tr>
        </tbody>
      </table>

      <h4>Total price: {{ invoice }}</h4>
      <h4>Total taxes: {{ taxes }}</h4>
      <h3 v-text-trans="'uppercase'">Total: {{ invoice + taxes }}</h3>
    </div>

    <br><br>
    <div class="container">
      <h3 v-custom-font.large.blue>Test directives with modifiers large</h3>
      <h2 v-custom-font.small.red>text from directive modifiers small</h2>
      <h2 v-custom-font.medium.green>hello world modifiers medium</h2>
      <h2 v-custom-font>the test is well modifiers default</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, computed } from "vue";

interface Ipayment {
  name: string;
  price: number;
  quantity: number;
}

const tax: Ref<number> = ref(10)
const invoice: Ref<number> = ref(0)

const listPayment: Ref<Array<Ipayment>> = ref([
  {
    name: 'Product 1',
    price: 100,
    quantity: 1
  },
  {
    name: 'Product 2',
    price: 250,
    quantity: 2
  },
  {
    name: 'Product 3',
    price: 500,
    quantity: 1
  },
]);

const taxes: Ref<number> = computed(() => {
  let total: Ref<number> = ref(0)

  listPayment.value.forEach((item) => {
    total.value += item.price * item.quantity;
  });

  invoice.value = total.value
  return (total.value * tax.value) / 100
});

</script>

<style scoped>
.main {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  color: orange;
}

.container {
  width: 70%;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  text-align: left;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #ddd;
}

h2 {
  text-align: center;
}
</style>
