<script setup lang="ts" name="PostList">
// ----------------------------------------
import { type Ref, ref } from 'vue';
// ----------------------------------------
import PostDetails from './PostDetails.vue';
// ----------------------------------------

interface Ipost {
  id: number;
  title: string;
  content: string;
}

const data:Ref<Array<Ipost>> = ref([
  {
    id: 1,
    title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia, molestias iste dolor, eligendi officia aliquid, consequatur sunt accusamus fuga maxime sint laboriosam quaerat?'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia, molestias iste dolor, eligendi officia aliquid, consequatur sunt accusamus fuga maxime sint laboriosam quaerat?'
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia, molestias iste dolor, eligendi officia aliquid, consequatur sunt accusamus fuga maxime sint laboriosam quaerat?'
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia, molestias iste dolor, eligendi officia aliquid, consequatur sunt accusamus fuga maxime sint laboriosam quaerat?'
  },
  {
    id: 5,
    title: 'Post 5',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum earum beatae odio quis dolorem quia, molestias iste dolor, eligendi officia aliquid, consequatur sunt accusamus fuga maxime sint laboriosam quaerat?'
  }
]);

function showAlert(msg:string) {
  alert(msg)
}
</script>

<template>
  <h1>Post List</h1>
  <div class="container">
    <PostDetails v-for="post in data" :key="post.id"
    :title="post.title"
    :content="post.content"
    @showAlert="showAlert"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
