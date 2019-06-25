<template>
  <!-- JLayout -->
  <a-layout class="mj-layout-container">
    <a-layout>
      <j-sider :collapsed="collapsed" />
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="toggleCollapsed"
          />
          <a-avatar
            :size="32"
            icon="user"
          />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import JSider from './sider.vue'

@Component({
  components: {
    JSider
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
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>