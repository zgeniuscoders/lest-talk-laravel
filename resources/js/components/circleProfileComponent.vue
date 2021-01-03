<template>
    <div :class="props.CustomClass" class="md:h-16 md:w-16 h-10 w-10 bg-indigo rounded-full">
        <img :src="`${photoUrl}pic.jpg`" alt="" class="w-full h-full rounded-full object-cover">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    CustomClass: String
})

const photoUrl = ref('/')
</script>