import Vue from 'vue'
import App from './App.vue'

// 引入自己的组件样式
import '../components/css/index.scss';
// import '../components/css/card.scss';
// import '../components/css/button.scss';
import Button from '../components/lib/button';
import Card from '../components/lib/card/index';
import Link from '../components/lib/link';
import Input from '../components/lib/input';
import Checkbox from '../components/lib/checkbox';
import CheckboxGroup from '../components/lib/checkbox-group';
import Tabs from '../components/lib/tabs';
import Tag from '../components/lib/tag';
import './assets/icon/iconfont.css';

// 注册组件
// Vue.component('name', Demo) 正确引入组件的方法
Vue.use(Card);// Demo.install -> Vue.component()
Vue.use(Button);
Vue.use(Link)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Tabs)
Vue.use(Tag)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
