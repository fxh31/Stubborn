<template>
  <a :type="type"
    :class="[ type? 's-link-' + type:'',{
      'is-disabled': disabled,
      'is-expired': expired
    },underline?'':'is-underline']"
    :href="disabled? null: href">
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
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    underline: {
      type: Boolean,
      default: true
    },
    expired: Boolean,
    href: String
  }
}
</script>

<style lang="scss">
@import "../styles/link.scss";
</style>
