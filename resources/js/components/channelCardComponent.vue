<template>
    <article class="flex items-center justify-between gap-4 mt-4">
        <div class="flex items-center justify-between gap-2">
            <circle-profile-component />
            <div>
                <h4 class="font-bold">Channel name</h4>
                <p class="text-gray">Channel description...</p>
            </div>
        </div>
        <button type="button" class="h-10 w-10 bg-red-300 rounded-md"></button>
    </article>
</template>
<script setup lang="ts">
import circleProfileComponent from './circleProfileComponent.vue';
</script>