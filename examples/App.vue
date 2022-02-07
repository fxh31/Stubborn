<template>
  <div id="app">
    <s-card>卡片</s-card>
    <s-button>默认按钮</s-button>
    <s-button type="primary">主要按钮</s-button>
    <s-button type="success">成功按钮</s-button>
    <s-button type="info">信息按钮</s-button>
    <s-button type="warning">警告按钮</s-button>
    <s-button type="danger"
      round>危险按钮</s-button>
    <s-button round>危险按钮</s-button>
    <s-button class=" s-icon-search"
      circle></s-button>
    <i class="s-icon-search"></i>
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
