<template>
    <section class="bg-white rounded-full p-2 flex items-center gap-2 shadow-sm">
        <div>
            <div class="md:h-16 md:w-16 h-10 w-10 rounded-full">
                <img :src="`${photoUrl}pic.jpg`" alt="" class="w-full h-full rounded-full object-cover">
            </div>
        </div>

        <form action="" class="w-full">
            <input type="text" placeholder="Write something"
                class="focus:border-none focus:outline-none bg-transparent w-full">
        </form>

        <button type="button" class="bg-indigo py-2 px-4 text-white rounded-full block text-sm md:text-md">post</button>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';


const photoUrl = ref('/')
</script>