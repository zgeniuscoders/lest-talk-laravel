<template>
    <div class="relative">
        <section class="bg-white shadow-sm rounded-md p-4 absolute w-full">
            <h3 class="text-indigo text-xl">Peoples suggest</h3>

            <div>
                <channel-card-component v-for="i in 6" :key="i" />
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import channelCardComponent from './channelCardComponent.vue';
</script>