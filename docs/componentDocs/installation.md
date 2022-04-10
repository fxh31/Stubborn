# 快速开始

### 安装组件库
```bash
npm i stubborn-ui
```

### 引用组件库
> 在main.js中引用组件库

```javascript
// 全部引入
import 'stubborn-ui/dists/index.css';
import StuUI from 'stubborn-ui';
Vue.use(StuUI);

// 按需引入(以Card为例)
import 'stubborn-ui/dists/card.css';
import { Card } from 'stubborn-ui';
Vue.use(Card);
```