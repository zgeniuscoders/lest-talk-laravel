<template>
    <article class="bg-white rounded-md mt-4 shadow-sm">
        <div>
            <!-- post head  -->
            <div class="flex items-center gap-2 p-4">
                <div class="h-16 w-16 bg-indigo rounded-full"></div>
                <div>
                    <h4 class="font-bold">zgenius coders</h4>
                    <p class="text-gray">@zgeniuscoders</p>
                </div>
            </div>

            <!-- post body -->
            <div>
                <p class="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt ullam ipsum.</p>
                <div class="bg-indigo w-full h-60 mt-2">

                </div>
            </div>

            <!-- post foot  -->
            <div class="p-4 flex justify-between">
                <div class="flex gap-6">
                    <button-post-like-component />
                    <button-post-comment-component />
                </div>
                <button-post-save-component />
            </div>
        </div>
    </article>
</template>
<script setup lang="ts">

import buttonPostLikeComponent from './buttonPostLikeComponent.vue';
import buttonPostCommentComponent from "./buttonPostCommentComponent.vue"
import buttonPostSaveComponent from "./buttonPostSaveComponent.vue"
</script>