// import About from '@/views/About/index.vue';

export default [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/index.vue')
  }
]
