import Vue from 'vue'
import VueRouter from 'vue-router'
import toDoListView from './components/toDoListView.vue'
import mainView from './components/mainView.vue'
import galleryView from './components/GalleryView.vue'

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
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: galleryView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;