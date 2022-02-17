<template>
  <label class="s-radio">
    <span class="s-radio-box-input">
      <span class="s-radio-input-inner"></span>
      <input type="radio"
        class="s-radio-input"
        aria-hidden="true"
        :value="label">
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
  props: {
    label: {}
  }
}
</script>