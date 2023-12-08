<template>
    <div class="h-16 w-16 bg-indigo rounded-full">
        <img :src="`${photoUrl}pic.jpg`" alt="" class="w-full h-full rounded-full object-cover">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const photoUrl = ref('/')
</script>