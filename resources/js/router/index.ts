import { createRouter, createWebHistory } from "vue-router";
import login from "../pages/auth/login.vue"
import home from "../pages/home.vue"
import register from "../pages/auth/register.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Let\'s Talk | Home'
        },
        component: home
    },

    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Let\'s Talk | Signin to your account'
        },
        component: login
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: 'Let\'s Talk | Signup'
        },
        component: register
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


const dom: Document = window.document
router.beforeEach((to, from, next) => {
    dom.title = to.meta.title as string
    next()
});

export default router;