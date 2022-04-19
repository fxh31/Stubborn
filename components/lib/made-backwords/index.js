import MadeBackwords from './src/main.vue'

MadeBackwords.install = function (Vue) {
  Vue.component(MadeBackwords.name, MadeBackwords);
}

export default MadeBackwords