<template>
  <!-- JLayout -->
  <a-layout class="mj-layout-container">
    <a-layout>
      <j-sider :collapsed="collapsed" />
      <a-layout>
        <j-header
          :collapsed="collapsed"
          @toggleCollapsed="toggleCollapsed"
        />
        <a-layout-content class="mj-mian-container">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import JSider from './Sider.vue'
import JHeader from './Header.vue'

@Component({
  components: {
    JSider,
    JHeader
  }
})
export default class JLayout extends Vue {
  // 1、props
  // @Prop({ type: Number, default: 123455 }) readonly propA: number | undefined
  // 2、data
  collapsed: boolean = false
  // 3、computed
  // get resoveMsg(): string {
  //   return `Edward ${this.msg}`
  // }
  // created() {}
  // mounted() {}
  // 5、methods
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed
  }
  // reverseString(): string {
  //   return this.msg
  //     .split('')
  //     .reverse()
  //     .join('')
  // }
  // 6、watch

  // beforeDestory(){}
}
</script>
<style lang='less' scoped>
.mj-layout-container {
  height: 100%;
  .mj-mian-container {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
}
</style>