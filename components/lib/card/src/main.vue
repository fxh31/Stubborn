<template>
  <div class="s-card"
    :style="{'width': width? width + 'px':{},'height':  height? height + 'px':{},} ">
    <div v-if="$slots.header"
      class="s-card-header">
      <slot name="header"></slot>
    </div>

    <div v-if="imgSrc"
      class="s-card-img"
      :style="imgHeight? {height: imgHeight + 'px'}:{}">
      <img :src="imgSrc"
        alt="img">
    </div>
    <div v-if="summary"
      class="s-card-summary">
      {{summary}}
    </div>
    <div v-else
      class="s-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 's-card',
  props: {
    // 卡片宽度
    width: {
      type: Number,
      default: 0
    },
    // 卡片高度
    height: {
      type: Number,
      default: 0
    },
    // 卡片图片资源地址
    imgSrc: {
      type: String,
      default: '',
    },
    // 高度
    imgHeight: {
      type: Number,
      default: 0
    },
    // 概要
    summary: {
      type: String,
      default: ''
    },

  }
}
</script>
