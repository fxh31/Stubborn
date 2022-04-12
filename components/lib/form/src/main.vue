<template>
  <div class="s-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 's-form',
  props: {
    model: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide() {
    return {
      Form: this
    }
  }
}
</script>