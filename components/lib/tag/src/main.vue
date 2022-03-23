<template>
  <span :class="['s-tag',type?'s-tag-'+type:'']"
    :style="{'background-color': color? color + '':{},'border-color':borderColor?borderColor+'':{}}"
    @click="clickTag">
    <slot></slot>
    <div class="s-tag-close"
      v-if="closable"
      @click="close">
      <div class="s-tag-close-left"></div>
      <div class="s-tag-close-right"></div>
    </div>
  </span>
</template>

<script>
export default {
  name: 's-tag',
  props: {
    type: {
      type: String
    },
    color: {
      type: String
    },
    borderColor: {
      type: String
    },
    closable: {
      type: Boolean
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    clickTag() {
      this.$emit('click')
    }
  }
}
</script>