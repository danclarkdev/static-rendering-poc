<template>
    <slot
        :="{
            attrs: {
                'data-contentful-entry-id': props.entryId,
            },
        }"
    />

</template>

<script setup lang="ts">
const props = defineProps<{
    entryId: string;
}>();
</script>
