<template>
  <div class="s-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 's-breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  provide() {
    return {
      sBreadcrumb: this
    }
  }
}
</script>

<style lang="scss">
@import "../styles/breadcrumb.scss";
</style>