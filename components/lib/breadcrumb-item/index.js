import BreadcrumbItem from './src/main.vue'

BreadcrumbItem.install = function (Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
}

export default BreadcrumbItem