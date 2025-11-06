<template>
  <!-- Componente padre -->
  <div class="container">
    <PostDetails v-for="post in data" :key="post.id" :title="post.title" :content="post.content" @greeting="received" />
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue';
// -------------------------------------------||
import PostDetails from './PostDetails.vue';
// -------------------------------------------||

interface Ipost {
  id: number;
  title: string;
  content: string;
}

const data: Ref<Array<Ipost>> = ref([
  {
    id: 1,
    title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia'

  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia'

  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia'

  },
  {
    id: 5,
    title: 'Post 5',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia'

  }
]);

// y el @greeting es el nombre dado al evento emitido desde el componente hijo

// este received es el nombre que le asignamos al evento emitido desde el componente hijo
// el cual se recibe con su corespondiente parametro.
function received(message: string) {
  alert(message)
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
