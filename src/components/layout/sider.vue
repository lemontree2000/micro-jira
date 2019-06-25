<template>
  <!-- JSidler -->
  <a-layout-sider
    class='mj-silder-container'
    :trigger="null"
    collapsible
    v-model="collapsed"
  >
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="inline"
      :defaultSelectedKeys="['1']"
    >
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class JSidler extends Vue {
  // 1、props
  @Prop() readonly collapsed!: boolean
  // 2、data
  // 3、computed
  // created() {}
  // mounted() {}
  // 5、methods
  // 6、watch

  // beforeDestory(){}
}
</script>
<style lang='less' scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>