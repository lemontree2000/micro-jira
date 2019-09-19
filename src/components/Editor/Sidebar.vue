<template>
  <!-- ms -->
  <section class="mj-editor-sidebar">
    <h2>流程图形</h2>
    <ul>
      <slot></slot>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface ListItem {
  a: string
  b: number
}

@Component
export default class Sidebar extends Vue {
  // 1、props
  @Prop({ type: Number, default: 123455 }) readonly propA: number | undefined

  // 2、data
  msg: string = 'hello Wolrd'
  list: ListItem[] = []
  // 3、computed
  get resoveMsg(): string {
    return `Edward ${this.msg}`
  }
  reverseString(): string {
    return this.msg
      .split('')
      .reverse()
      .join('')
  }

}
</script>
<style lang='less' scoped>
.mj-editor-sidebar {
  width: 80px;
  h2 {
    font-size: 14px;
    text-align: center;
    line-height: 32px;
    font-weight: 600;
    border-bottom: 1px solid #dedede;
    user-select: none;
  }
}
</style>