import Vue from 'vue'

// antd-vue
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

// reset style
import '@/styles/reset.less'

// function-api
import { plugin } from 'vue-function-api'

Vue.use(plugin)
Vue.use(antd)
