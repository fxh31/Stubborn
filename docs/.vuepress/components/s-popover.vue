<template>
  <div class="s-popover">
    <transition name="s-popover-fade"
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave">
      <div v-show="showPopper"
        ref="popper"
        class="s-popover-content"
        :style="{marginLeft: popMarginLeft+'px',top:popTop+'px',width:width+'px'}">
        <div class="s-popover-arrow"
          v-show="visibleArrow"></div>
        <div v-text="title"
          class="s-popover-title"></div>
        <slot name="popover">{{content}}</slot>
      </div>
    </transition>
    <div ref="wrapper">
      <slot name="reference">主体内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-popover',
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    content: String,
    title: String,
    width: {
      type: Number
    },


  },
  data() {
    return {
      showPopper: false,
      popMarginLeft: 0,
      popTop: 0
    }
  },
  watch: {
    showPopper(val) {
      if (val) {
        this.update();
      }
      val ? this.$emit('show') : this.$emit('hide')
    }
  },
  mounted() {
    const popper = this.popper = this.$refs.popper;
    const reference = this.reference = this.$refs.wrapper.children[0];

    console.log(popper, reference)

    if (this.modalAppendToBody) {
      document.body.appendChild(popper);
    }

    // if (this.visibleArrow) {
    //   const arrow = document.createElement('div');
    //   arrow.className = 's-popper-arrow';
    //   popper.appendChild(arrow)
    // }

    if (this.trigger === 'click') {
      reference.addEventListener('click', this.doToggle, false)
      document.addEventListener('click', this.handleDocumentClick)
    }
    if (this.trigger === 'hover') {
      reference.addEventListener('mouseenter', this.doToggle);
      reference.addEventListener('mouseleave', this.doToggle)
    }
    if (this.trigger === 'manual') {
      reference.addEventListener('mousedown', this.doToggle)
    }


  },
  methods: {
    doToggle() {
      this.showPopper = !this.showPopper;
    },
    handleDocumentClick(e) {
      if (!this.$el || this.$el.contains(e.target)) return;
      this.showPopper = false;
    },
    update() {
      const temp = this.popper.style.display;
      this.popper.style.display = 'block';
      const popWidth = this.popper.offsetWidth;
      const popHeight = this.popper.offsetHeight;
      this.popper.style.display = temp;

      this.popMarginLeft = -(popWidth / 2)
      this.popTop = -(popHeight + 15)
    },
    handleAfterEnter() {
      this.$emit('after-enter');
    },
    handleAfterLeave() {
      this.$emit('after-leave');
    },
  }

}
</script>
<style lang="scss">
@import "../styles/popover.scss";
</style>