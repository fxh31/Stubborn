<template>
  <div class="s-md"
    ref="mdBox">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 's-md',
  props: {
    bgData: Object
  },
  data() {
    return {
    }
  },
  watch: {
    bgData() {
      this.changeColor()
    },
    immediate: true,
    deep: true
  },
  created() {
  },
  mounted() {
  },
  methods: {
    changeColor() {
      this.$refs.mdBox.style.backgroundImage = 'radial-gradient(closest-side,rgba(' + this.bgData.r1 + ',' + this.bgData.g1 + ',' + this.bgData.b1 + ',1),rgba(' + this.bgData.r1 + ',' + this.bgData.g1 + ',' + this.bgData.b1 + ',0)),radial-gradient(closest-side,rgba(' + this.bgData.r2 + ',' + this.bgData.g2 + ',' + this.bgData.b2 + ',1),rgba(' + this.bgData.r2 + ',' + this.bgData.g2 + ',' + this.bgData.b2 + ',0)),radial-gradient(closest-side,rgba(' + this.bgData.r3 + ',' + this.bgData.g3 + ',' + this.bgData.b3 + ',' + '1),rgba(' + this.bgData.r3 + ',' + this.bgData.g3 + ',' + this.bgData.b3 + ',0)),radial-gradient(closest-side,rgba(' + this.bgData.r4 + ',' + this.bgData.g4 + ',' + this.bgData.b4 + ',1),rgba(' + this.bgData.r4 + ',' + this.bgData.g4 + ',' + this.bgData.b4 + ',0)),radial-gradient(closest-side,rgba(' + this.bgData.r5 + ',' + this.bgData.g5 + ',' + this.bgData.b5 + ',1),rgba(' + this.bgData.r5 + ',' + this.bgData.g5 + ',' + this.bgData.b5 + ',0))'
      this.$refs.mdBox.style.backgroundColor = 'rgb(' + this.bgData.r + ',' + this.bgData.g + ',' + this.bgData.b + ')'
    }
  }

}
</script>

<style lang="scss">
@import "../styles/made-background.scss";
</style>
