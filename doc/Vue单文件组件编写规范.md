# Vue SFC编写规范 

## 模板
```vue
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
<style lang="less" scoped>
</style>

```

## 代码片段
```json
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to vue": {
		"prefix": "Vue-ts",
		"body": [
			"<template>",
			"  <!-- ${1:page} -->",
			"  <section class='${2:page-name}'>",
			"    <p>props:{{this.propA}}</p>",
			"    <p>data: {{msg}}</p>",
			"    <p>computed: {{resoveMsg}}</p>",
			"    <P>methods: {{reverseString()}}</P>",
			"  </section>",
			"</template>",
			"",
			"<script lang='ts'>",
			"import { Component, Prop, Vue, Watch } from 'vue-property-decorator'",
			"",
			"interface ListItem {",
			"  a: string,",
			"  b: number",
			"}",
			"",
			"@Component",
			"export default class ${3:DashBoard} extends Vue {",
			"  // 1、props",
			"  @Prop({ type: Number, default: 123455 }) readonly propA: number | undefined",
			"  // 2、data",
			"  msg: string = 'hello Wolrd'",
			"  list: ListItem[] = []",
			"  // 3、computed",
			"  get resoveMsg(): string {",
			"    return `Edward ${this.msg}`",
			"  }",
			"  // created() {}",
			"  // mounted() {}",
			"  // 5、methods",
			"  reverseString(): string {",
			"    return this.msg",
			"      .split('')",
			"      .reverse()",
			"      .join('')",
			"  }",
			"  // 6、watch",
			"",
			"  // beforeDestory(){}",
			"}",
			"</script>",
			"<style lang='less' scoped>",
			"</style>",
		],
		"description": "Vue typescript组件模板快速生成"
	}
}

```
