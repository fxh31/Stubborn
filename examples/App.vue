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
      label="sdfas"
      @change="text1">asd</s-checkbox> -->
    <s-checkbox-group horizontal
      :options="data"
      :width=60
      @change="sad"
      @click="dd">
    </s-checkbox-group>
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
        { label: '备选项一', value: 21, name: '备选项一', disabled: true },
        { label: '备选项二', value: 22, name: '备选项二', disabledChecked: true },
        { label: '备选项三', value: 22, name: '备选项三', checkedItem: true },
        { label: '备选项四', value: 24, name: '备选项四' },
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
    },
    dd(e) {
      console.log(e)
    },
    text1(e) {
      console.log(e);
    }




  }
}
</script>

<style scope>
.box {
  display: flex;
}
</style>
