<template>
  <div class="s-input-box">
    <input v-if="type!=='textarea'"
      :type="type"
      required="required"
      :class="[ 's-input',
      type?'s-input-'+type:'',
      {
      'is-disabled': disabled
    }]"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput" />
    <div v-if="clear"
      @click="clickClear($event)"
      class="clear-box"></div>

    <textarea :value="value"
      @input="handleInput"
      :placeholder="placeholder"
      class="s-input-textarea"></textarea>
    <span class="s-input-limit-count">1</span>
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
    value: String
  },
  created() {
  },
  methods: {
    clickClear(e) {
      // 当前元素dom的上一个元素的值
      e.currentTarget.previousElementSibling.value = '';
    },
    handleInput(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>