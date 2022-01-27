import Vue from 'vue'
import App from './App.vue'

// 引入自己的组件样式
import '../components/css/demo.scss';
import '../components/css/card.scss';
import Demo from '../components/lib/demo/index';
import Card from '../components/lib/card/index';

// 注册组件
// Vue.component('name', Demo) 正确引入组件的方法
Vue.use(Demo);// Demo.install -> Vue.component()
Vue.use(Card);
// import 'stubborn-ui/dist/css/index.css';
// import StuUI from 'stubborn-ui';
// Vue.use(StuUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
