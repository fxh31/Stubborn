<template>
  <button :type="type"
    :class="[
    type ? 's-button-' + type:'',
    size? 's-button-' + size: '',
    {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 's-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String
    },
    trans: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean

  }
}
</script>

<style lang="scss">
@import "../styles/button.scss";
@import "../styles/iconfont.css";
</style>