<script setup lang="ts">
import Card from './Card.vue'
</script>

<template>
  <h1 class="title">Post Title</h1>
  <div class="container">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}

.title {
  color: #282828;
}
</style>
