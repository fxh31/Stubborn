<template>
  <div id="app">
    <s-card>卡片</s-card>
    <s-button>默认按钮</s-button>
    <i class="s-icon-search"></i>
    <s-link>saf</s-link>
    <s-link type="success"
      disabled>你好年后</s-link>
    <s-link type="primary"
      disabled
      expired>是你少说</s-link>
    <s-link type="info"
      underline>saf</s-link>
    <s-link type="warning"
      disabled>saf</s-link>
    <s-link type="danger"
      expired>saf</s-link>
    <s-link type="danger"
      disabled>你好年后</s-link>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scope>
</style>
