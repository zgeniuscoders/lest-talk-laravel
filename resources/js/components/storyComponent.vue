<template>
    <article class="bg-indigo rounded-md h-48 relative flex items-center justify-center bg-cover"
        :style="`background-image: url(${photoUrl}bg.jpg)`">
        <div class="self-end flex flex-col items-center mb-4">
            <circleProfileComponent />
            <h4 class="text-sm mt-2 text-white">zgenius coders</h4>
        </div>
    </article>
</template>
<script setup lang="ts">

import circleProfileComponent from './circleProfileComponent.vue';

</script>