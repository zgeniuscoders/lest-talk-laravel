<template>
   <main class="bg-gray flex items-center justify-center h-screen w-full">
      <section class="bg-white shadow-md rounded-md w-[450px] h-[500px] px-6 flex flex-col justify-between">

         <!-- logo  -->
         <div class="flex items-center flex-col mt-12">
            <img :src="publicPath" alt="" class="w-[240px]">
            <p class="text-center text-xl">Diversify and meet new people to live
               unforgettable <span class="text-indigo">moments!!</span></p>
         </div>

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
         <div class="mb-6">



            <p class="text-center">
               Don’t have an account?
               <router-link to="" class="text-indigo">
                  Sign up here.
               </router-link>
            </p>
         </div>
      </section>
   </main>
</template>
<script setup lang="ts">
import { ref } from "vue"
import inputComponent from "@/components/inputComponent.vue";
import buttonComponent from "@/components/buttonComponent.vue";

const publicPath = ref('/logo.svg')


const data = ref({
   email: String,
   password: String
})

</script>