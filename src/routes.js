import Shiping_ from './components/Shiping.vue'
import Login_ from './components/Login.vue'
import PageNotFound from './components/Pagenotfound.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Shiping',
        component:Shiping_,
        path:'/'
    },
    {
        name:'Login',
        component:Login_,
        path:'/login'
    },
    {
        name:'PageNotFound',
        component:PageNotFound,
        path:'/:pathMatch(.*)*'
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router