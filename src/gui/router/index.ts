import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServerList from '../views/ServerList.vue'
import Settings from '../views/Settings.vue'
import Options from '../views/Options.vue'
import Content from '../views/Content.vue'

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
    path: '/content',
    name: 'Content',
    component: Content
  },
  {
    path: '/options',
    name: 'Options',
    component: Options
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
})

export default router
