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
    <!-- <s-checkbox v-model="value1"
      label="sdfas">asd</s-checkbox> -->
    <s-checkbox-group horizontal
      :options="data"
      @change="sad"
      @click="dd"
      :width=60>
    </s-checkbox-group>
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
      value2: true,
      item1: [],
      data: [
        { label: '一', value: 21, name: 'ee', disabled: true },
        { label: '二', value: 22, name: 'ww', disabledChecked: true },
        { label: '二', value: 22, name: 'ww', checkedItem: true },
        { label: '三', value: 24, name: 'ab' },

      ]
    }
  },
  created() {
    // this.sad()
  },
  methods: {
    sad(data, index) {
      console.log(data)
      console.log(index)
      console.log(1)
    },
    dd(e) {
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
