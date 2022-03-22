<template>
  <div class="s-tabs">
    <div class="s-tabs-header"
      :style="{'width':width+'px'}"
      :class="[type?'none':'']">
      <div v-for="(item,index) in tabsdata"
        :key="index"
        class="s-tabs-item"
        :class="[{'active': index === curIndex}]"
        @click="tabClick(index)">{{item.title}}</div>
    </div>
    <div class="s-tabs-header-line"
      :class="[type=='line'?'line':'none']"
      :style="{'width':width+'px'}">
      <div class="s-tabs-line-bar"
        :style="{width: widthItem+'px',left:leftItem+'px'}"></div>
      <div v-for="(item,index) in tabsdata"
        :key="index"
        :id="index"
        class="s-tabs-line-item"
        :class="{'active-line': index === curIndex}"
        @click="tabClick(index)">{{item.title}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 's-tabs',
  props: ['tabsdata', 'width', 'type'],
  data() {
    return {
      // 默认选中
      curIndex: 0,
      widthItem: '',
      leftItem: ''
    }
  },
  created() {

  },
  methods: {
    tabClick(index) {
      this.$emit('tabClick', index);
      this.curIndex = index;
      let box = document.getElementById(index);
      this.widthItem = box.getBoundingClientRect().width;
      this.leftItem = box.offsetLeft;
    }
  }
}
</script>

<style lang="scss">
@import "../styles/tabs.scss";
</style>
