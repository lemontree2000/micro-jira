<template>
  <!-- page -->
  <section class="mj-editor">
    <div class="mj-editor-bottom">
      <Sidebar>
        <li class="ge-item">
          <img
            src="~@/assets/images/start.png"
            width="40"
            alt="开始"
          >
          <div class="title">
            开始
          </div>
        </li>
      </Sidebar>
      <section
        class="mj-editor-canvas"
        ref="editor"
      >
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
  ProvideReactive
} from 'vue-property-decorator'
import mx from '@/mxgraph/index'
import Sidebar from './Sidebar.vue'
import { mxgraph } from 'mxgraph'

interface ListItem {
  a: string
  b: number
}

@Component({
  components: {
    Sidebar
  }
})
export default class Editor extends Vue {
  // 1、props
  @Prop({ type: Number, default: 123455 }) readonly propA: number | undefined
  // 2、data
  graph!: mxgraph.mxGraph
  @ProvideReactive() editor = this

  msg: string = 'hello Wolrd'
  list: ListItem[] = []
  // 3、computed
  get resoveMsg(): string {
    return `Edward ${this.msg}`
  }
  // get graphMx(): string {
  //   return this.graphInstance
  // }
  // created() {}
  mounted() {
    this.initGraph()
  }
  // 5、methods
  initGraph(): void {
    const container = this.$refs.editor
    // 传入容器，不传默认使用body
    const graph = new mx.mxGraph(container as Element)
    this.graph = graph
    // 设置图形节点直接的连接
    graph.setConnectable(true)
    // 开启图形框选
    // tslint:disable-next-line:no-unused-expression
    new mx.mxRubberband(graph)

    // const parent = graph.getDefaultParent()
    // // Adds cells to the model in a single step
    // graph.getModel().beginUpdate()
    // try {
    //   const v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30)
    //   const v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30)
    //   const e1 = graph.insertEdge(parent, null, '', v1, v2)
    // } finally {
    //   // Updates the display
    //   graph.getModel().endUpdate()
    // }
  }
  // 6、watch
  // 7、update(){}
  // beforeDestory(){}
}
</script>
<style lang='less' scoped>
.mj-editor {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: default;
  .mj-editor-bottom {
    display: flex;
    height: 100%;
    .ge-item {
      text-align: center;
      .title {
        font-size: 12px;
        margin-top: 4px;
      }
    }
    .mj-editor-canvas {
      flex: 1;
      background: url('~@/assets/images/grid.gif');
    }
  }
}
</style>