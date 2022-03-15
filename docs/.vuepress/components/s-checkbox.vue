<template>
  <div class="s-checkbox-box">
    <span class="s-checkbox">
      <span class="s-checkbox-innner"></span>
      <input type="checkbox"
        :checked="checked"
        @change="handleChange"
        :class="['s-checkbox-input', {
          'is-disabled-null': isDisabled && !checked,
          'is-disabled':isDisabled
        }]">
    </span>
    <span :class="['s-checkbox-label',
      {
        'is-checked': checked,
        'is-disabled-label': isDisabled
      }
    ]"
      v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </div>
</template>

<script>
export default {
  name: 's-checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    // 插槽优先
    label: String,
    disabled: Boolean,

  },
  data() {
    return {

    }
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },

  },
  created() {

  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.checked);
    }

  }
}
</script>

<style lang="scss">
@import "../styles/checkbox.scss";
</style>