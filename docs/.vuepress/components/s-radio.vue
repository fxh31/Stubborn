<template>
  <label class="s-radio"
    :class="{'is-checked':label === model,'s-radio-is-disabled':disabled}"
    ref="label">
    <span class="s-radio-input">
      <span class="s-radio-inner"></span>
      <input class="s-radio-original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange">
    </span>
    <span class="s-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>

export default {
  name: 's-radio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        if (!this.disabled && !this.RadioGroup.disabled) {
          // 触发父组件给当前组件注册的input事件
          this.$emit('input', value)
          this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value);
        }

      }
    },
    // 用于判断radio是否被radioGroup所包裹
    isGroup() {
      return !!this.RadioGroup;
    }
  },
  created() {

  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
<style lang="scss">
@import "../styles/radio.scss";
</style>