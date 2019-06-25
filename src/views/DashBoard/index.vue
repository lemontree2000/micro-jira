<template>
  <!-- DashBoard -->
  <section class='mj-dashboard-container'>
    DashBoard
  </section>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface ListItem {
  a: string
  b: number
}

@Component
export default class DashBoard extends Vue {
  // 1、props
  @Prop({ type: Number, default: 123455 }) readonly propA: number | undefined
  // 2、data
  msg: string = 'hello Wolrd'
  list: ListItem[] = []
  // 3、computed
  get resoveMsg(): string {
    return `Edward ${this.msg}`
  }
  // created() {}
  // mounted() {}
  // 5、methods
  reverseString(): string {
    return this.msg
      .split('')
      .reverse()
      .join('')
  }
  // 6、watch

  // beforeDestory(){}
}
</script>
<style lang='less' scoped>
.mj-dashboard-container {

}
</style>