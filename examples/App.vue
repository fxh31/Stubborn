<template>
  <div id="app"
    class="box">
    <!-- <s-card>卡片</s-card>
    <s-button>默认按钮</s-button>
    <i class="s-icon-search"></i>
    <s-link href="#">默认链接</s-link> -->
    <!-- <s-input v-model="value1"
      placeholder="请输入内容"></s-input> -->
    <!-- <s-checkbox v-model="value1"
      label="sdfas"
      @change="text1">asd</s-checkbox> -->
    <!-- <s-checkbox-group horizontal
      :options="data"
      :width=60
      @change="sad"
      @click="dd">
    </s-checkbox-group> -->
    <!-- <s-tabs :tabsdata="tabsdata"
      @tabClick="switchItem"
      :width="width"
      type="line"></s-tabs> -->
    <s-tag closable
      @close="closea"
      @click="addone"
      color="#fff"
      borderColor="red">标签一</s-tag>
    <s-tag type="primary">标签</s-tag>
    <s-tag type="info">标签一</s-tag>
    <s-tag type="warning">标签一</s-tag>
    <s-tag type="danger">标签一</s-tag>
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
      currentIndex: 0,
      tabsdata: [
        {
          title: '项1',
          widthItem: 200
        },
        {
          title: '项2'
        },
        {
          title: 3
        }
      ],
      width: 500,

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
    },
    switchItem() {

    },
    closea() {
      console.log(1)
    },
    addone() {
      console.log(2)
    }




  }
}
</script>

<style scope>
.box {
  display: flex;
}
</style>
