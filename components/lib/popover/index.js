import Popover from './src/main.vue'

Popover.install = function (Vue) {
  Vue.component(Popover.name, Popover);
}

export default Popover