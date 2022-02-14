<template>
  <a :type="type"
    :class="['s-link', type? 's-link-' + type:'',{
      'is-disabled': disabled,
      'is-underline': underline,
      'is-expired': expired
    }]">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 's-link',
  props: {
    type: {
      type: String
    },
    disabled: Boolean,
    underline: Boolean,
    expired: Boolean
  }
}
</script>