import Vue from 'vue'
import VueRouter from 'vue-router'
import toDoListView from './components/toDoListView.vue'
import mainView from './components/mainView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: mainView
    },
    {
        path: '/toDoList',
        name: 'toDoList',
        component: toDoListView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;