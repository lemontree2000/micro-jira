<template>
  <!-- page -->
  <section class="page-name">
    <p>props:{{this.propA}}</p>
    <p>data: {{msg}}</p>
    <p>computed: {{resoveMsg}}</p>
    <P>methods: {{reverseString()}}</P>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface ListItem {
  a: string,
  b: number
}

@Component
export default class Flow extends Vue {
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
  // 7、update(){}
  // beforeDestory(){}
}
</script>
<style lang='less' scoped>
</style>