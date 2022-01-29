import Vue from 'vue'
import App from './App.vue'

// 引入自己的组件样式
import '../components/css/index.scss';
// import '../components/css/card.scss';
// import '../components/css/button.scss';
import Button from '../components/lib/button';
import Card from '../components/lib/card/index';

// 注册组件
// Vue.component('name', Demo) 正确引入组件的方法
Vue.use(Card);// Demo.install -> Vue.component()
Vue.use(Button);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
