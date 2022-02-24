<template>
  <div class="s-input-box">
    <div class="s-input-text">
      <input v-if="type!=='textarea'"
        :type="type"
        required
        :class="[ 's-input',
      type?'s-input-'+type:'',
      {
      'is-disabled': disabled
    }]"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange" />
      <div v-if="clear"
        @click="clickClear($event)"
        class="clear-box"></div>
    </div>

    <div v-if="type =='textarea'"
      class="s-input-textarea-box">
      <textarea :value="value"
        @input="handleInput"
        :placeholder="placeholder"
        :rows='rows'
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        class="s-input-textarea"
        :maxlength="maxlength"></textarea>
      <span v-if="lengthLimitVisiable"
        class="s-input-limit-count">{{textLength}}/{{maxlength}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    disabled: Boolean,
    clear: Boolean,
    value: String,
    // 可以显示的行数
    rows: {
      type: Number,
      default: 2
    },
    maxlength: {
      type: Number,
      default: 20
    },
    lengthLimitVisiable: Boolean
  },
  created() {
  },
  data() {
    return {
      textLength: 0
    }
  },
  methods: {
    handleFocus(event) {
      // this.focused = true;
      this.$emit('focus', event);
    },
    handleBlur(event) {
      // this.focused = false;
      this.$emit('blur', event);
    },
    handleChange(event) {
      this.$emit('change', event.target.value);
    },
    clickClear() {
      // 当前元素dom的上一个元素的值
      // e.currentTarget.previousElementSibling.value = '';
      this.$emit('input', '');
      this.$emit('change', '');
    },
    handleInput(e) {
      this.$emit('input', e.target.value);
      this.textLength = e.target.value.length;
    },

  }
}
</script>
<style lang="scss">
@import "../styles/input.scss";
</style>