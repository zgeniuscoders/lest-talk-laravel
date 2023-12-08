<template>
    <main class="bg-gray flex items-center justify-center h-screen w-full">
        <section class="bg-white shadow-md rounded-md w-[450px] px-6 py-12 flex flex-col justify-between gap-4">

            <!-- logo  -->
            <div class="flex items-center flex-col">
                <img :src="publicPath" alt="" class="w-[240px]">
                <p class="text-center text-xl">Diversify and meet new people to live
                    unforgettable <span class="text-indigo">moments!!</span></p>
            </div>

            <slot />

        </section>
    </main>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const publicPath = ref('/logo.svg')
</script>