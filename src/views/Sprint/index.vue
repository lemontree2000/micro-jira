<template>
  <!-- Sprint page -->
  <section class="mj-sprint-container">
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface ListItem {
  a: string,
  b: number
}

@Component
export default class DashBoard extends Vue {
  // 1、props
  // @Prop({ type: Number, default: 123455 }) readonly propA: number | undefined
  // 2、data
  // 3、computed
  // created() {}
  // mounted() {}
  // 5、methods
  // 6、watch
  // 7、update(){}
  // beforeDestory(){}
}
</script>
<style lang='less' scoped>
</style>