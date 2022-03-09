<template>
  <div :class="['s-checkbox-group',horizontal?'item-horizontal':'']">
    <div :class="['s-checkbox-group-item'
   ]"
      v-for="(option,index) in options"
      :key="index"
      @click="selectHandle(option,index)"
      :style="{'width': width>50? width + 'px':{}} ">
      <input type="checkbox"
        :id="option.name + option.value"
        :name="option.name"
        :checked="option.checkedItem"
        :value="option.value"
        :disabled="option.disabled"
        @click="clickHandle"
        :class="['s-checkbox-group-item-input',
        option.disabled?'is-disabled-null':'',
        option.disabledChecked?'is-disabled':'',
        ]" />
      <span :class="['s-checkbox-group-item-label',
        option.disabled?'is-disabled-label':'',
        option.disabledChecked?'is-disabled-label':'',
      {
        'is-checked':checked
      }]">
        {{option.label}}
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name: 's-checkbox-group',
  props: {
    /*
    {label: '一', value: 21, name: 'ee', disabled: true}
     */
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: () => []
    },
    checked: Boolean,
    horizontal: Boolean,
    width: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      checkedV: false
    }
  },
  created() {
  },
  methods: {
    selectHandle(date, index) {
      this.$emit('change', date, index)
    },
    clickHandle(e) {
      this.$emit('click', e.target.checked)
    }


  }
}
</script>