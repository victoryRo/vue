<template>
  <!-- Componente hijo -->
  <div class="post">
    <h3>{{ props.title }}</h3>
    <p>
      {{ props.content }}
    </p>
    <input type="text" v-model="message" placeholder="Write message">
    <button class="btn" @click="sendMsg">Emit event from child</button>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";

// props que recibe este componente hijo
// toda informacion enviada desde el padre
// atraves de la propiedad 'props' es de solo lectura.
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
})

// msg para el input
const message: Ref<string> = ref("")

// evento emisor 'emit' que envia informacion al padre
// para pedirle que cambie alguna informacion en el padre
// para que luego sea propagada a los componentes hijos.
const emit = defineEmits(["greeting"])

// metodo o funcion que ejecuta el evento emitido.
// atraves de un @click
const sendMsg = () => {
  emit("greeting", message.value)
  message.value = ""
}
</script>

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
