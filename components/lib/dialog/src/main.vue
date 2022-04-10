<template>
  <transition name="s-dialog-fade">
    <div class="s-dialog-wrapper"
      v-show="visible"
      @click.self="handleClose">
      <div class="s-dialog"
        :style="{width:width,marginTop:top}">
        <div class="s-dialog-header">
          <slot name="title">
            <span class="s-dialog-title">{{title}}</span>
          </slot>
          <div class="s-dialog-headerbtn"
            @click="handleClose"
            v-if="showClose"></div>
        </div>
        <div class="s-dialog-body">
          <slot></slot>
        </div>
        <div class="s-dialog-footer"
          v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 's-dialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: "30%"
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  }
}
</script>