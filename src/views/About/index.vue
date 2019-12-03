<template>
  <!-- DashBoard -->
  <section class='mj-dashboard-container'>
    <!-- <div id="editor"></div> -->
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
      ><input type="text" >{{item.name}} abc</li>
    </ul>
    <button @click="resoveArr">反转</button>
  </section>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface ListItem {
  name: string
  // b: number
}

@Component
export default class About extends Vue {
  // 1、props
  @Prop({ type: Number, default: 123455 }) readonly propA: number | undefined
  // 2、data
  msg: string = 'hello Wolrd'
  list: ListItem[] = [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
  // 3、computed
  get resoveMsg(): string {
    return `Edward ${this.msg}`
  }
  // created() {}
  mounted() {
    this.initEditor()
  }
  resoveArr(): void {
    this.list = this.list.reverse()
    console.log(this.list)
  }
  initEditor(): void {
    // console.log(window.mxClient)
    // // Checks if the browser is supported
    // if (!window.mxClient.isBrowserSupported()) {
    //   // Displays an error message if the browser is not supported.
    //   window.mxUtils.error('Browser is not supported!', 200, false)
    // }
    // window.mxUtils.getAll(
    //   ['/mxgraph/editor/resources/grapheditor.txt', window.STYLE_PATH + '/default.xml'],
    //   (xhr: any) => {
    //     // Adds bundle text to resources
    //     window.mxResources.parse(xhr[0].getText())
    //     // Configures the default graph theme
    //     const themes = new Object() as any
    //     themes.default = xhr[1].getDocumentElement()
    //     const editor = new window.Editor(null, themes)
    //     // Main
    //     const a = new window.EditorUi(editor, document.getElementById('editor'))
    //     console.log(editor, a)
    //     window.bbb = a
    //   }
    // )
  }
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
// .mj-dashboard-container {}
* {
  box-sizing: content-box;
}
</style>