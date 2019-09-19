<template>
  <!-- mj-editor-header -->
  <section class="mj-editor-header">
    <div class="editor-header-title">
      <a-icon type="codepen" style="font-size: 32px;color:#1890ff;" />
      <h1>Graph Pen</h1>
    </div>
    <div class="editor-header-actions">
      <a-button type="default">取消</a-button>
      <a-button type="primary">保存</a-button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface ListItem {
  a: string,
  b: number
}

@Component
export default class EditorHeader extends Vue {
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
@prefix: editor-header;

.mj-@{prefix} {
  height: 56px;
  line-height: 56px;
  display: flex;
  box-shadow:0px 0px 8px 0px rgba(0,0,0,0.05);
  .@{prefix}-title {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 20px;
    h1 {
      margin: 0;
      margin-left: 10px;
      font-size: 20px;
    }
  }
  .@{prefix}-actions {
    .ant-btn {
      margin-right: 20px;
    }
  }
}
</style>