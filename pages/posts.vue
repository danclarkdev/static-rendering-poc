<template>
    <div v-for="post in posts" :key="post.id">
        <ContentfulEntry :entry-id="post.id" #="{ attrs }">
            <h1 :="attrs">{{ post.title }}</h1>
        </ContentfulEntry>
    </div>
</template>

<script setup lang="ts">
const posts = [
    {
        id: 'aaaaa',
        title: 'A Post',
    },
    {
        id: 'bbbbb',
        title: 'B Post',
    },
    {
        id: 'ccccc',
        title: 'C Post',
    },
];
</script>
