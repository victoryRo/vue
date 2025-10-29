<script lang="ts" setup>
import { onMounted } from "vue";
import PostService from "@/services/PostService";

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
    await service.fetchAll();
});
</script>

<template>
    <div class="container">
        <h1 v-case.capi>post list</h1>
        <table>
            <thead>
                <tr>
                    <th v-case.upper>id</th>
                    <th v-case.upper>title</th>
                    <th v-case.upper>body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>

.container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid $verde;
    border-radius: 10px;
    background-color: $base;

    h1 {
        color: $verde;
        padding: 6px;
        text-align: center;
    }
}

table {
    font-family: Arial, Helvetica, sans-serif;
    color: $verde-oscuro;
    border-collapse: collapse;
    width: 90%;
    margin: auto;
    margin-bottom: 50px;

    th {
        background-color: $verde;
        color: $base;
    }

    th,
    td {
        border: 1px solid $verde;
        padding: 10px;
    }

    tr:nth-child(even) {
        background-color: $verde-suave;
    }
}
</style>
