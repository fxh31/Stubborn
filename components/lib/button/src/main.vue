<template>
  <button :type="type"
    :class="[
    type ? 's-button-' + type:'',
    size? 's-button-' + size: '',
    {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      },'s-button'
    ]"
    @click="handleClick">
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
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>