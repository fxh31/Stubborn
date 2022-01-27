<template>
  <div id="app">
    <!-- 简单用法 -->
    <s-card :width='300'
      :height='100'
      class="item"
      summary="我是内容概述">
    </s-card>
    <!-- 带图片 -->
    <br />
    <s-card imgSrc="keji.jpg"
      :width='300'
      summary="fdiusobdiabfib">
      <template v-slot:footer>
        <div class="footer">
          我是底部内容
        </div>
      </template>
    </s-card>
    <br />
    <!-- 基础用法：包括header，summary和footer部分 -->
    <s-card :width='300'>
      <template v-slot:header>
        <span>卡片标题</span>
      </template>
      <div v-for="o in 4"
        :key="o"
        class="text item">
        {{'我是内容概要 ' + o }}
      </div>
      <template v-slot:footer>
        <div class="footer">
          我是底部内容
        </div>
      </template>
    </s-card>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      content: 'sfsaidfbudoafuidsabufbdsabufalwb'
    }
  }
}
</script>

<style scope>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
  color: #9199a1;
}
.item .s-card-summary {
  font-size: 16px;
  text-align: center;
}
.item {
  padding: 10px 0;
}
.text {
  font-size: 14px;
}
</style>
