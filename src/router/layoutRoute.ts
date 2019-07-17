import JLayout from '../components/Layout/index.vue'
import DashBoard from '../views/DashBoard/index.vue'
import NotFound from '../components/Error/404.vue'

export default {
  path: '/',
  name: 'home',
  component: JLayout,
  redirect: '/DashBoard',
  children: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard,
    },
    {
      path: '*',
      name: 'not found',
      component: NotFound
    }
  ]
}
