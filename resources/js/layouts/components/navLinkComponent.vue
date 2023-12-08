<template>
    <li class="py-4 flex items-center justify-between flex-col relative w-20">
        <router-link to="">
            <img :src="home" alt="" class="w-8" />
        </router-link>
        <div class="w-20 bg-indigo h-[6px] rounded-full absolute bottom-0 left-0"></div>
    </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const home = ref("/home.png")

</script>