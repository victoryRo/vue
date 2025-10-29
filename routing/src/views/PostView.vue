<script setup lang="ts">
// import { onMounted, ref } from 'vue'
// import { useRoute } from 'vue-router'
//
// const postId = ref('')
//
// onMounted(() => {
//   const route = useRoute()
//   postId.value = route.params.id
// })
</script>

<template>
  <div class="container">
    <h1>Post View</h1>
    <h3>ID {{ $route.params.id }}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusantium odio ratione
      voluptate, cumque rem facere voluptas vero amet eius, perspiciatis ullam nisi? Omnis corrupti
      facilis consequatur reiciendis illo et ok thank you. ok thank you.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 90%;
  height: 200px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h1 {
    color: dodgerblue;
    text-align: center;
  }

  h3 {
    color: dodgerblue;
  }

  p {
    text-align: justify;
    font-family: Helvetica, sans-serif;
  }
}
</style>
