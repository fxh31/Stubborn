# Stubborn-ui组件库
### 快速开始
#### 1.安装组件库
```bash
npm i stubborn-ui
```

#### 2.引用组件库
```javascript
// 全部引入
import 'stubborn-ui/dist/css/index.css';
import StuUI from 'stubborn-ui';
Vue.use(StuUI);

// 按需引入
import 'stubborn-ui/dist/css/card.css';
import { Card } from 'stubborn-ui';
Vue.use(Card);
```