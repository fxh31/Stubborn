<template>
  <div :class="{'s-radio-group':disabled}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 's-radio-group',
  provide() {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null,
    disabled: {
      type: Boolean,
      default: false
    }
  }

}
</script>