<template>
    <section class="fixed bottom-10 right-40 w-[300px] h-[400px] bg-white rounded-lg shadow-md p-4 overflow-auto">
        <h3 class="text-indigo-300 font-bold text-xl">Chats</h3>

        <article class="flex items-center gap-2 justify-between mt-4" v-for="i in 12" :key="i">
            <div>
                <circleProfileComponent CustomClass="h-10 w-10"/>
            </div>
            <div>
                <h3 class="font-bold">Zgenius Coders</h3>
                <p class="text-sm text-gray-200 break-words">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </article>
    </section>
</template>
<script setup lang="ts">
    import circleProfileComponent from './circleProfileComponent.vue';
</script>   