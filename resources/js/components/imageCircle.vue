<template>
    <div class="w-full h-60 mt-2">
        <img :src="`${photoUrl}bg.jpg`" alt="" class="h-full w-full object-cover">
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';


const photoUrl = ref('/')
</script>