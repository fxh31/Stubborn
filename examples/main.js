import Vue from 'vue'
import App from './App.vue'

// 引入自己的组件样式
import '../components/css/card.scss';
import Card from '../components/lib/card/index';

// 注册组件
// Vue.component('name', Demo) 正确引入组件的方法
Vue.use(Card);// Demo.install -> Vue.component()
// import 'stubborn-ui/dist/css/index.css';
// import StuUI from 'stubborn-ui';
// Vue.use(StuUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
