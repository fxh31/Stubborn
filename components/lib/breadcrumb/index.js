import Breadcrumb from './src/main.vue'

Breadcrumb.install = function (Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
}

export default Breadcrumb