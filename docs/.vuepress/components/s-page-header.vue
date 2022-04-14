<template>
  <div class="s-page-header">
    <div class="s-page-header-left"
      @click="$emit('back')">
      <div class="s-page-icon-back"></div>
      <div class="s-page-header-title">
        <slot name="title">{{title}}</slot>
      </div>
    </div>
    <div class="s-page-header-content">
      <slot name="content">{{content}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-page-header',
  props: {
    title: {
      type: String,
      default: '返回'
    },
    content: String
  }
}
</script>
<style lang="scss">
@import "../styles/page-header.scss";
</style>