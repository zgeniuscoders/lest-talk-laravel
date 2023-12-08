<template>
    <router-link to="" class="relative">
        <div class="absolute -top-2 bg-red-400 rounded-full text-white text-sm w-6 h-6 flex items-center justify-center right-4">
            <span>3</span>
        </div>
        <img :src="home" alt="" class="w-8" />
    </router-link>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const home = ref("/home.png")
</script>