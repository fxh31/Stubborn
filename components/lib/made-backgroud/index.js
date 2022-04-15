import MadeBackground from './src/main.vue'

MadeBackground.install = function (Vue) {
  Vue.component(MadeBackground.name, MadeBackground);
}

export default MadeBackground