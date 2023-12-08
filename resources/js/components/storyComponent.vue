<template>
    <article class="bg-indigo rounded-md h-48 relative flex items-center justify-center bg-cover" :style="`background-image: url(${photoUrl}bg.jpg)`">
        <div class="self-end flex flex-col items-center mb-4">
            <div class="h-16 w-16 bg-white rounded-full">
                <img :src="`${photoUrl}pic.jpg`" alt="" class="w-full h-full rounded-full object-cover">
            </div>
            <h4 class="text-sm mt-2 text-white">zgenius coders</h4>
        </div>
    </article>
</template>
<script setup lang="ts">
import { ref } from 'vue';


const photoUrl = ref('/')

</script>