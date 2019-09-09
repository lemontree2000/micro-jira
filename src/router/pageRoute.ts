// import About from '@/views/About/index.vue';

export default [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/index.vue')
  },
  {
    path: '/flow',
    name: 'flow',
    component: () => import(/* webpackChunkName: "flow" */ '@/views/Flow/index.vue')
  }
]
