<template>
  <!-- header -->
  <a-layout-header class="mj-header-container">
    <section class="left">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggleCollapsed"
      />
    </section>
    <section class="center"></section>
    <section class="right">
      <a-dropdown placement="bottomRight">
        <div>
          <a-avatar
            :size="36"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <span class="right-user-name">Edward
            <a-icon type="down" /></span>
        </div>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </section>
  </a-layout-header>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'

@Component
export default class JHeader extends Vue {
  // 1、props
  @Prop() readonly collapsed!: boolean
  // 2、data
  // 3、computed
  // created() {}
  // mounted() {}
  // 5、methods
  @Emit('toggleCollapsed')
  toggleCollapsed(): void {
    // tslint:disable-next-line:no-empty
  }
  // 6、watch

  // beforeDestory(){}
}
</script>
<style lang='less' scoped>
.mj-header-container {
  display: flex;
  background: #fff;
  padding: 0;
  .left {
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
  .center {
    flex: 1;
  }
  .right {
    &-user-name {
      .anticon-down {
        font-size: 12px;
      }
      display: inline-block;
      margin-left: 10px;
      font-size: 14px;
      font-weight: 700;
    }
  }
  .ant-dropdown-trigger {
    padding-right: 20px;
    .ant-avatar {
      box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.1);
    }
  }
}
</style>