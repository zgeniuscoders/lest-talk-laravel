<template>
    <aside class="relative">
        <div class="bg-white rounded-md p-4 shadow-sm absolute w-full">
            <!-- Channels -->
            <div>
                <h3 class="text-indigo text-xl">Channels</h3>
                <channelCardComponent />
                <channelCardComponent />
                <channelCardComponent />

                <router-link to="" class="text-indigo text-center w-full mt-4 block">Load more</router-link>
            </div>

            <!-- groups -->
            <div>
                <h3 class="text-indigo text-xl">Groups</h3>
                <channelCardComponent />
                <channelCardComponent />
                <channelCardComponent />

                <router-link to="" class="text-indigo text-center w-full mt-4 block">Load more</router-link>
            </div>
        </div>
    </aside>
</template>
<script setup lang="ts">
import channelCardComponent from './channelCardComponent.vue';
</script>