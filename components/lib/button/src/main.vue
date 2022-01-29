<template>
  <button :type="type"
    :class="[
    type ? 's-button-' + type:'',
    {
        'is-round': round,
        'is-circle': circle
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
    trans: Boolean,
    round: Boolean,
    circle: Boolean,

  }
}
</script>