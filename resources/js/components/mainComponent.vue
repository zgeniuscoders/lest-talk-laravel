<template>
    <div>
        <post-component />

        <div class="mt-4 grid grid-cols-4 gap-2">
            <storyComponent />
            <storyComponent />
            <storyComponent />
            <storyComponent />
        </div>

        <div>
            <post-card-component />
            <post-card-component />
            <post-card-component />
            <post-card-component />
            <post-card-component />
            <post-card-component />
        </div>
    </div>
</template>
<script setup lang="ts">
import postComponent from './post/postComponent.vue';
import storyComponent from "./storyComponent.vue"
import postCardComponent from "./post/postCardComponent.vue"
</script>