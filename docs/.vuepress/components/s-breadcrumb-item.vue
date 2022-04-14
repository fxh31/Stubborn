<template>
  <span class="s-breadcrumb-item">
    <span ref="link"
      :class="['s-breadcrumb-inner',to?'is-link':'']"
      @click="handleItem">
      <slot></slot>
    </span>
    <span class="s-breadcrumb-separator">{{separator}}</span>
  </span>
</template>

<script>
export default {
  name: 's-breadcrumb-item',
  props: {
    to: {},
    replace: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      separator: ''
    }
  },
  inject: ['sBreadcrumb'],
  mounted() {
    this.separator = this.sBreadcrumb.separator;

    const link = this.$refs.link;

    link.addEventListener('click', () => {
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);

    })
  },
  methods: {
    handleItem() {
      const { to, $router } = this;
      if (!to.path) return;
      if ($router) $router.push(to)
      location.pathname = to.path;
    }
  }
}
</script>
<style lang="scss">
@import "../styles/breadcrumb.scss";
</style>