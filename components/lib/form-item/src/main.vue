<template>
  <div class="s-form-item">
    <label class="s-form-item-label"
      :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="s-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 's-form-item',
  props: {
    label: String
  },
  inject: ['Form'],
  mounted() {
    this.$on('validate', () => {
      this.validate()
    });
  },
  methods: {
    validate() {
      console.log('af')
    }
  }
}
</script>