<script setup lang="ts" name="PostDetails">
import { defineProps, type Ref, ref } from "vue";
// ----------------------------------------------

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
    default: "No content",
  },
});

const message: Ref<string> = ref("");

const emit = defineEmits(["showAlert"]);

const handleClick = () => {
  emit("showAlert", message.value);
  message.value = "";
};
</script>

<template>
  <div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <input type="text" v-model="message" placeholder="Enter message" />
    <button class="btn" @click="handleClick">Emit event from child</button>
  </div>
</template>

<style scoped>
.post {
  width: 300px;
  height: auto;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 14px;
}

input {
  width: 100%;
  padding: 8px;
  margin: 12px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.btn {
  width: 100%;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
