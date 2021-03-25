import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServerList from '../views/ServerList.vue'
import Files from '../views/Files.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/serverlist',
    name: 'ServerList',
    component: ServerList
  },
  {
    path: '/files',
    name: 'Files',
    component: Files
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
