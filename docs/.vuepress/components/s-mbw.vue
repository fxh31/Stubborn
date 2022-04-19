<template>
  <div class="s-mbw">
    <div class="s-mbw-box"
      @click="animate">
      <svg :width='size'
        :height='size'>
        <circle fill="transparent"
          stroke-width="10"
          stroke="#eee"
          :r="radius"
          :cx="circleOffset"
          :cy="circleOffset"></circle>
        <circle fill="transparent"
          stroke-width="10"
          :stroke="strokeColor"
          :r="radius"
          :cx="circleOffset"
          :cy="circleOffset"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progress"
          stroke-linecap="round"
          class="s-mbw-circle"></circle>
      </svg>
      <span class="s-mbw-number"
        ref="mbwNum">{{countdown}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-mbw',
  data() {
    return {
      stroke: 10,
      percentage: 10,
      timer: null
    }
  },
  props: {
    // 圈的大小
    size: {
      type: Number,
      default: 120
    },
    // 字体的大小
    fontSize: {
      type: Number,
      default: 60
    },
    // 边框的颜色
    strokeColor: {
      type: String,
      default: '#96c24e'
    },
    seconds: {
      type: Number,
      default: 10
    }
  },
  watch: {
    fontSize(newValue, oldValue) {
      this.$refs.mbwNum.style.fontSize = newValue + "px";
    }
  },
  computed: {
    radius() {
      return (this.size / 2) - (this.stroke / 2)
    },
    circleOffset() {
      return this.size / 2;
    },
    circumference() {
      return this.radius * 2 * Math.PI;
    },
    progress() {
      return this.circumference - this.circumference * this.percentage / 10;
    },
    countdown() {
      return Math.ceil(this.seconds * this.percentage / 10)
    }
  },
  mounted() {
    this.changeFont()
  },
  methods: {
    animate() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.percentage -= 1 / 100;

        if (this.percentage <= 0) {
          clearInterval(this.timer)
          this.percentage = 10;
        }
      }, this.seconds * 1000 / 100 / 10)
    },
    changeFont() {
      this.$refs.mbwNum.style.fontSize = this.fontSize + "px";
    }
  }
}
</script>

<style lang="scss">
@import "../styles/made-backwards.scss";
</style>
