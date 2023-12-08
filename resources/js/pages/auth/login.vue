<template>
   <form-component>
      <!-- form  -->
      <div>
         <form action="">
            <input-component placeholder="Your email addresse" id="email" v-model="data.email" type="text" />

            <input-component placeholder="Your password" id="password" v-model="data.password" type="password" />

            <button-component buttonLabel="login" />

         </form>

         <p class="text-black text-center mt-6 hover:text-indigo transition">
            <router-link to="">Forgot password ?</router-link>
         </p>
      </div>

      <!-- bottom -->

      <p class="text-center">
         Don’t have an account?
         <router-link :to="{ name: 'register' }" class="text-indigo">
            Sign up here.
         </router-link>
      </p>

   </form-component>
</template>
<script setup lang="ts">
import { ref } from "vue"
import inputComponent from "@/components/inputComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";
import formComponent from "@/components/formComponent.vue";

const data = ref({
   email: String,
   password: String
})

</script>