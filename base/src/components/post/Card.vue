<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <div class="card">
    <h3>Title</h3>
    <p>
      Declarative Rendering: Vue extends standard HTML with a template
      syntax that allows us to declaratively describe HTML output based on JavaScript state.
    </p>

    <Button />
  </div>
</template>

<style scoped>
.card {
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
  border: 1px solid #eaeaea;
}
</style>
