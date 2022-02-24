<template>
  <div id="app"
    class="box">
    <!-- <s-card>卡片</s-card>
    <s-button>默认按钮</s-button>
    <i class="s-icon-search"></i>
    <s-link href="#">默认链接</s-link> -->
    <!-- <s-radio label="ss"></s-radio> -->
    <s-input v-model="value1"
      type="password"
      @blur="test"
      clear
      @change="test2"
      placeholder="请输入内容"></s-input>
    <!-- <s-input :value="value1"
      @input="value1 = $event"></s-input> -->
    <div>内容:{{ value1 }}</div>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      value1: ''
    }
  },
  created() {
    // this.getvalue()
  },
  methods: {
    test(e) {
      console.log(1)
      console.log(e)
    },
    test2(e) {
      console.log(e)
      console.log(2)
    },
    test3() {
      console.log(3)
    }
  }
}
</script>

<style scope>
.box {
  display: flex;
}
</style>
