// import About from '@/views/About/index.vue';

export default [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/index.vue')
  },
  {
    path: '/graph-editor',
    name: 'graph-editor',
    component: () => import(/* webpackChunkName: "graph-editor" */ '@/views/Editor/index.vue')
  }
]
