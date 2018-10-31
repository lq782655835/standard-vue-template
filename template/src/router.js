import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/pages/index')
        },

{{#ui}}
        {
            path: '/demo',
            name: 'demo',
            component: () => import('@/pages/demo')
        },
{{#ui}}
        {
            path: '*',
            redirect: '/'
        }
    ]
})

export default router
