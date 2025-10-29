<script setup lang="ts">
import { computed, type Ref, ref } from "vue";

interface IPayment {
  name: string;
  price: number;
  quantity: number;
}

const taxes: Ref<number> = ref(10);

const listPayment: Ref<Array<IPayment>> = ref([
  {
    name: "Product 1",
    price: 100,
    quantity: 1,
  },
  {
    name: "Product 2",
    price: 250,
    quantity: 2,
  },
  {
    name: "Product 3",
    price: 500,
    quantity: 1,
  },
]);

const calculateTaxes = computed(() => {
  const total: Ref<number> = ref(0);

  listPayment.value.forEach((item) => {
    total.value += item.price * item.quantity;
  });

  return (total.value * taxes.value) / 100;
});
</script>

<template>
  <div>
    <h1 v-font-size="60" v-format="'capitalize'">payment invoice</h1>
    <div class="container" v-bg:gr>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        <tr v-for="(item, index) in listPayment" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </table>

      <h2 v-font-size="22" v-format="'uppercase'">
        taxes: {{ calculateTaxes }}
      </h2>
    </div>

    <br /><br />
    <div class="container">
      <h3 v-custom-font.large.blue>Test directives with modifiers large</h3>

      <h2 v-custom-font.small.red>text from directive modifiers small</h2>
      <h2 v-custom-font.medium.green>hello world modifiers medium</h2>
      <h2 v-custom-font>the test is well modifiers default</h2>
    </div>
  </div>
</template>

<style scoped>
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
