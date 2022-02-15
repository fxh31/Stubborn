<template>
  <div id="app">
    <s-card>卡片</s-card>
    <s-button>默认按钮</s-button>
    <i class="s-icon-search"></i>
    <s-link href="#"
      disabled
      expired>111111</s-link>
    <s-link href="#"
      :underline="false">saf222</s-link>
    <s-link href="#"
      disabled>你好年后</s-link>
    <s-link type="primary"
      disabled
      expired>是你少说</s-link>
    <s-link type="info"
      underline>saf</s-link>
    <s-link type="warning"
      href="https://element.eleme.cn/#/zh-CN/component/link">saf</s-link>
    <s-link href="#"
      type="danger"
      expired>saf</s-link>
    <s-link :underline="false"
      href="https://element.eleme.cn/#/zh-CN/component/link">你好年后</s-link>
    <s-link href="#"
      expired
      disabled>主链接</s-link>
    <s-link href="#">无下划线</s-link>
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
