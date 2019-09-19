<template>
  <!-- page -->
  <section class="mj-editor-page">
    <EditorHeader/>
    <div class="mj-editor-warrper">
      <Editor/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Editor from '@/components/Editor/index.vue'
import EditorHeader from './components/Header.vue'

interface ListItem {
  a: string,
  b: number
}

@Component({
  components: {
    Editor,
    EditorHeader
  }
})
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
.mj-editor-page {
  display: flex;
  height: 100%;
  flex-direction: column;
  .mj-editor-warrper {
    flex: 1;
  }
}
</style>