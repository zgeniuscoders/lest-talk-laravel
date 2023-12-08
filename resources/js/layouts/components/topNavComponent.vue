<template>
    <header class="w-full bg-white">
        <div class="container mx-auto grid grid-cols-page items-center gap-4">
            <img :src="logo" alt="let's talk logo" class="w-36" />
            <nav class="">
                <ul class="flex justify-between">
                    <nav-link-component name="home" />
                    <nav-link-component name="chat" />
                    <nav-link-component name="followers" />
                    <nav-link-component name="channel" />
                    <nav-link-component name="groupes" />
                </ul>
            </nav>
            <div class="flex justify-end gap-8">
                <notification-component />
                <notification-component />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from "vue"
import navLinkComponent from "./navLinkComponent.vue"
import notificationComponent from "./notificationComponent.vue"
const logo = ref('/logo.svg')

</script>