<template>
  <div id="app">
    <s-card>卡片</s-card>
    <s-button>默认按钮</s-button>
    <i class="s-icon-search"></i>
    <s-link href="#">默认链接</s-link>
    <s-link href="#"
      type="primary">主要链接</s-link>
    <s-link href="#"
      type="success">成功链接</s-link>
    <s-link href="#"
      type="warning">警告链接</s-link>
    <s-link href="#"
      type="danger">危险链接</s-link>
    <s-link href="#"
      type="info">信息链接</s-link>

  </div>
</template>

<script>
import SLink from '../docs/.vuepress/components/s-link.vue'

export default {
  name: 'App',
  components: {
    SLink
  },
  data() {
    return {
    }
  }
}
</script>

<style scope>
</style>
