<script lang="ts" setup></script>

<template>
  <div class="container">
    <h1>Section Blog</h1>
    <h3>Visit post</h3>
    <ul>
      <li><router-link :to="{ name: 'post', params: { id: 1 } }">Post one</router-link></li>
      <li><router-link :to="{ name: 'post', params: { id: 2 } }">Post two</router-link></li>
      <li><router-link :to="{ name: 'post', params: { id: 3 } }">Post three</router-link></li>
      <li><router-link :to="{ name: 'post', params: { id: 4 } }">Post four</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
.container {
  width: 90%;
  height: 340px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h1 {
    color: dodgerblue;
    text-align: center;
  }

  h3 {
    color: #1a1a1a;
    margin-bottom: 20px;
  }

  ul li {
    width: 90%;
    padding: 5px 10px;
    background-color: #0077cc;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    text-align: center;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
