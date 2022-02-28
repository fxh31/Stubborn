<template>
  <div id="app"
    class="box">
    <!-- <s-card>卡片</s-card>
    <s-button>默认按钮</s-button>
    <i class="s-icon-search"></i>
    <s-link href="#">默认链接</s-link> -->
    <!-- <s-radio label="ss"></s-radio> -->
    <!-- <s-input v-model="value1"
      placeholder="请输入内容"></s-input> -->
    <s-checkbox v-model="value1"
      label="sdfas">asd</s-checkbox>
    <!-- <div>{{value1}}</div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      value1: '',
      value2: true
    }
  },
  created() {
    // this.getvalue()
  },
  methods: {
    sad(e) {
      console.log(e)
    }

  }
}
</script>

<style scope>
.box {
  display: flex;
}
</style>
