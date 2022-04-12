<template>
  <div class="s-tree">
    <div class="s-tree-content">
      <div class="s-tree-box">
        <div v-if="isOpenFolder"
          :class="[open?'s-tree-ico-close':'s-tree-ico-open']"></div>
      </div>
      <div @click="toggle"
        class="s-tree-label">
        {{treeData.label}}
      </div>
    </div>

    <!-- 递归组件 -->
    <transition name="s-tree-list">
      <div v-if="isOpenFolder"
        v-show="open">
        <s-tree v-for="data in treeData.children"
          :treeData="data"
          :key="data.label"
          class="s-tree-list"></s-tree>
      </div>
    </transition>
  </div>
</template> 

<script>
export default {
  name: 's-tree',//name对递归组件是必须的
  props: {
    treeData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    isOpenFolder() {
      return this.treeData.children && this.treeData.children.length;
    }
  },
  methods: {
    toggle() {
      if (this.isOpenFolder) {
        this.open = !this.open;
      }
    }
  }
}
</script>
<style lang="scss">
@import "../styles/tree.scss";
</style>