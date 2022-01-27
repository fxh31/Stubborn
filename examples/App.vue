<template>
  <div id="app">
    <!-- 简单用法 -->
    <s-card :width='500'
      :height='200'
      class="text">
      nihaohodosaofdo
    </s-card>
    <br />
    <!-- 带图片 -->
    <s-card imgSrc="logo.png"
      summary='hello world'
      :height="200">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">初级</div>
          <div class="price">1</div>
        </div>
      </template>
    </s-card>
    <br />
    <s-card imgSrc="logo.png"
      :width='380'>
      nihaohodosaofdo
      <template v-slot:footer>
        <div class="footer">
          <div class="level">初级</div>
          <div class="price">2</div>
        </div>
      </template>
    </s-card>
    <br />
    <!-- 基础用法：包括header，summary和footer部分 -->
    <s-card>
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

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}
.text .s-card-summary {
  font-size: 40px;
  margin-top: 20px;
  text-align: center;
}
.item {
  padding: 10px 0;
}
.text {
  font-size: 14px;
}
</style>
