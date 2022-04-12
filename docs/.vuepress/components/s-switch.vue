<template>
  <div class="s-switch"
    :class="{'is-checked':value}"
    @click="handleClick">
    <span class="s-switch-label-left"
      ref="left">{{ activeText }}</span>
    <input class="s-switch-input"
      type="checkbox"
      :name="name"
      ref="input">
    <span class="s-switch-core"
      :class="{'is-disable':disabled}"
      ref="core">
      <span class="s-switch-button"></span>
    </span>
    <span class="s-switch-label-right"
      ref="right">{{ inactiveText }}</span>
  </div>
</template>

<script>
export default {
  name: 's-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.setColor();
    // 同步checkbox的checkbox值
    this.$refs.input.checked = this.value;
  },
  methods: {
    async handleClick() {
      if (!this.disabled) {
        this.$emit('change', this.value);
        this.$emit('input', !this.value);
        // 等待value发生变化，在执行this.setColor()
        // 数据修改后，等待DOM更新，在修改按钮的颜色
        await this.$nextTick()
        this.setColor();
        this.$refs.input.checked = this.value;
      }
    },
    setColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
      if (this.value == false) {
        this.$refs.left.style.color = "#96c24e";
        this.$refs.right.style.color = "#000";
      } else if (this.value == true) {
        this.$refs.left.style.color = "#000";
        this.$refs.right.style.color = "#96c24e";
      }

    }
  }
}
</script>

<style lang="scss">
@import "../styles/switch.scss";
</style>