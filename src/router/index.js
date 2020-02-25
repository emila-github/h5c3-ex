import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const pages = [
  // [path, component]
  ['/day01/form-other', '/day01/FormOther'],
  ['/day01/form-type', '/day01/FormType'],
  ['/day01/form-datalist', '/day01/FormDatalist'],
  ['/day01/form-keygen-output', '/day01/FormKeygenOutput'],
  ['/day01/form-progress', '/day01/FormProgress'],
  ['/day01/form-event', '/day01/FormEvent'],
  ['/day01/form', '/day01/Form'],
  ['/day01/audio-video', '/day01/AudioVideo'],
  ['/day01/dom', '/day01/Dom'],
  ['/day01/dom-query-selector', '/day01/DomQuerySelector'],
  ['/day01/dataset', '/day01/Dataset'],

  ['/day02/net-work', '/day02/NetWork'],
  ['/day02/full-screen', '/day02/FullScreen'],
  ['/day02/file-reader', '/day02/FileReader'],
  ['/day02/draggabler', '/day02/Draggable'],
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]
pages.forEach(page => {
  let [path, component] = page
  let names = component.split('/') || []
  let name = names
    .map(name => {
      return name.substr(0, 1).toUpperCase() + name.substr(1)
    })
    .join('')

  routes.push({
    path: path,
    name: name,
    component: () => import(`../views${component}`),
  })
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
