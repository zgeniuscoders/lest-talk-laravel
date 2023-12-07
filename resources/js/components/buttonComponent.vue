<template>
    <button @click.prevent="submit" :disabled="isLoading"
        class="bg-indigo text-white border border-gray-300 text-sm rounded-lg focus:ring-indigo focus:border-indigo w-full p-2.5 capitalize flex items-center justify-center">
        <span v-if="!isLoading">{{ props.buttonLabel }}</span>
        <img :src="loading" alt="" class="w-6 h-6" v-else>
    </button>
</template>
<script setup lang="ts">

import { ref } from "vue"

const loading = ref("/loading.gif")
const isLoading = ref(false)

const props = defineProps({
    buttonLabel: String
})

const submit = () => {
    isLoading.value = true
}
</script>