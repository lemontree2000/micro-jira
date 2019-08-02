<template>
  <!-- page -->
  <section class="page-name">
    {{count}}
    <a-button
      type="danger"
      @click="increment"
    >+++</a-button>
  </section>
</template>

<script lang="ts">
import { value, onMounted, createComponent } from 'vue-function-api'

export default createComponent({
  setup() {
    const count = value(0)
    const increment = () => {
      count.value++
    }
    onMounted(() => {
      console.log('mounted')
    })
    return {
      increment,
      count
    }
  }
})
</script>
<style lang='less' scoped>
</style>