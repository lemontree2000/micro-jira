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

const dropSuccessCb = function(
  this: any,
  graph: mxgraph.mxGraph,
  evt: any,
  target: mxgraph.mxCell,
  x: number,
  y: number,
) {
  console.log(graph, evt, target, x, y)
  console.log(this.element)
  const src = this.element.src
  console.log(src)

  const cell = new mx.mxCell(null, new mx.mxGeometry(0, 0, 40, 40), `shape=image;image=${src}`)
  console.log(cell)
  cell.vertex = true
  // 导入图形
  const cells = graph.importCells([cell], x, y, target, evt, null)
  if (cells != null && cells.length > 0) {
    // 添加后选中图形
    graph.setSelectionCells(cells)
  }
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
    const img = document.querySelector('.ge-item img')
    const dragImage = img && img.cloneNode(true)
    mx.mxUtils.makeDraggable(
      img,
      this.dropGraph,
      dropSuccessCb,
      dragImage,
      null,
      null,
      null,
      true
    )
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
  // 鼠标点击时判断是否在容器内，如果是则返回容器
  dropGraph(evt: any) {
    const x: number = mx.mxEvent.getClientX(evt)
    const y: number = mx.mxEvent.getClientY(evt)
    // 获取 x,y 所在的元素
    const elt = document.elementFromPoint(x, y)
    // 如果鼠标落在graph容器
    if (mx.mxUtils.isAncestorNode(this.graph.container, elt)) {
      return this.graph
    }
    // 鼠标落在其他地方
    return null
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