<template>
    <default-layout>
        <div class="container mx-auto grid grid-cols-page grid-flow-row gap-4 mt-20">
            <aside-component />
            <main-component />
            <people-component />
        </div>

        <chat-bubble-button-component />
    </default-layout>
</template>

<script setup lang="ts">
import defaultLayout from '@/layouts/defaultLayout.vue';
import asideComponent from '@/components/asideComponent.vue';
import mainComponent from '@/components/mainComponent.vue';
import chatBubbleButtonComponent from '@/components/chatBubbleButtonComponent.vue';
import peopleComponent from '@/components/peopleComponent.vue';
</script>