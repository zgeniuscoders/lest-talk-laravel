import './bootstrap';
import { createApp } from 'vue';
import router from "./router"
import Toaster from '@meforma/vue-toaster';
import mainLayout from "./layouts/mainLayout.vue"

createApp({})
    .component("mainLayout", mainLayout)
    .use(Toaster)
    .use(router)
    .mount("#app")
