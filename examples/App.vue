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
    <!-- <s-tag closable
      @close="closea"
      @click="addone"
      color="#fff"
      borderColor="red">标签一</s-tag> -->
    <!-- <s-button type="primary"
      size="small"
      @click="visible = true">显示</s-button>
    <s-dialog top="200px"
      :visible.sync="visible"
      :show-close=true>
      <ul>
        <li>aa</li>
        <li>ab</li>
      </ul>
      <template v-slot:footer>
        <s-button size="small"
          @click="visible = false">取消</s-button>
        <s-button size="small"
          type="primary"
          @click="visible = false">确定</s-button>
      </template>
    </s-dialog> -->
    <!-- <s-dialog>
      <template v-slot:title>
        <h>woshi</h>
      </template>
    </s-dialog> -->
    <!-- <s-switch v-model="active"
      name="username"
      @change="cahnge1"
      disabled
      active-text="按月付费"
      inactive-text="按年付费"></s-switch> -->
    <!-- <s-radio label="1"
      v-model="gender">男</s-radio>
    <s-radio label="0"
      v-model="gender"
      @change="dd">女</s-radio>
    <s-radio-group v-model="gender2">
      <s-radio label="1">男</s-radio>
      <s-radio label="0">女</s-radio>
    </s-radio-group> -->
    <!-- <s-form :model="model"
      label-width="180px">
      <s-form-item label="用户名">
        <s-input placeholder="请输入用户名"
          v-model="model.username"></s-input>
      </s-form-item>
      <s-form-item label="选择">
        <s-switch v-model="model.active"></s-switch>
      </s-form-item>
    </s-form> -->
    <!-- <s-tree :treeData="treeData"></s-tree> -->
    <!-- <s-paage-header content="详情页面"
      @back="cahnge1"></s-paage-header> -->
    <!-- <s-breadcrumb separator=">">
      <s-breadcrumb-item>a</s-breadcrumb-item>
      <s-breadcrumb-item :to="{path:'/1'}">b</s-breadcrumb-item>
    </s-breadcrumb> -->
    <!-- <s-popover trigger="click"
      :width="100"
      style="position:relative;top:400px;left:400px"
      content="内容"
      title="标题"
      @after-enter="cahnge1">
      <s-button slot="reference">click 激活</s-button>
    </s-popover> -->
    <s-mbw :seconds=12
      strokeColor="green"
      :fontSize=60>
    </s-mbw>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {


  },
  data() {
    return {
      daat1: {
        r: 255, g: 105, b: 180, r1: 235, g1: 105, b1: 78, r2: 234, g2: 11, b2: 164, r3: 254, g3: 234, b3: 131, r4: 170, g4: 142, b4: 245, r5: 248, g5: 192, b5: 147
      },
      treeData: {
        label: "下拉树",
        children: [
          {
            label: "下拉树1",
            children: [
              { label: "下拉树1-2" },
              { label: '下拉树2-2' }
            ]
          },
          {
            label: '下拉树2'
          },
          {
            label: '下拉树3'
          }
        ]
      },
      model: {
        username: '',
        active: true
      },
      gender: '0',
      gender2: '1',
      active: false,
      visible: false,
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
      colorTest: 'red'

    }
  },
  created() {
    // this.sad()
  },
  methods: {
    cahnge1() {
      console.log(2)
    },
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
.a {
  width: 200px;
  margin-left: 20px;
}
</style>
