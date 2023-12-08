<template>
    <form-component>
        <!-- form  -->

        <form action="">
            <input-component placeholder="Your email addresse" id="email" v-model="data.email" type="email" />
            <input-component placeholder="Your username" id="email" v-model="data.name" type="text" />

            <input-component placeholder="Your password" id="password" v-model="data.password" type="password" />
            <input-component placeholder="Confirm your password" id="confirm_password" v-model="data.password" type="password" />

            <button-component buttonLabel="register" />

        </form>


        <!-- bottom -->
        <div class="mt-8">
            <p class="text-center">
                Already have an account?
                <router-link :to="{name: 'login'}" class="text-indigo">
                    Sign in here.
                </router-link>
            </p>
        </div>
    </form-component>
</template>
<script setup lang="ts">
import { ref } from "vue"
import inputComponent from "@/components/inputComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import formComponent from "@/components/formComponent.vue";

const data = ref({
    email: String,
    name: String,
    password: String
})

</script>