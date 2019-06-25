<template>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class DashBoard extends Vue {
    @Prop(Number) readonly propA: number | undefined
  }
</script>
<style >
</style>
