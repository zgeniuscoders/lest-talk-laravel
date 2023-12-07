<template>
    <div class="col-span-6 sm:col-span-3 my-2">
        <label :for="props.id" class="block mb-2 text-sm font-medium text-gray-900" v-if="props.name">{{ props.name
        }}</label>

        <input :type="props.type" :id="props.id" :placeholder="props?.placeholder" v-on:input="($event) => emit('update:modelValue', $event.target.value)
            "
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo focus:border-indigo block w-full p-2.5"
            required />
    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    name: String,
    type: String,
    id: String,
    placeholder: String,
    modelValue: [String, Number],
});

const emit = defineEmits(["update:modelValue"]);

</script>
