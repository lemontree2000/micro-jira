<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import JLayout from './components/Layout/index.vue'

@Component({
  components: {
    JLayout
  }
})
export default class App extends Vue {
  // 1、props
  // 2、data
  // 3、computed
  // created() {}
  // mounted() {}
  // 5、methods
  // 6、watch
  // beforeDestory(){}
}
</script>
<style lang="less" scoped>
#app {
  height: 100vh;
}
</style>
