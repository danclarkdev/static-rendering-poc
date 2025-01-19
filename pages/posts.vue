<template>
    <div v-for="post in data" :key="post.id">
        <ContentfulEntry :entry-id="post.id" #="{ attrs }">
            <h1 :="attrs">{{ post.title }}</h1>
        </ContentfulEntry>
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/posts');
</script>
