# PageHeader 页头
针对页面路径比较简单的情况。

### 基础

<div class="boxPage">
  <s-page-header content="详情页面" @back="goBack"></s-page-header>
</div>



<details>
<summary>查看源码</summary>

```vue
<s-page-header content="详情页面" @back="goBack"><s-page-header>

<script>
export default {
  data() {
    return {
      radio: '1'
    }
  },
  methods: {
    goBack(){
      console.log('go back');
    }
  }
}
</script>
```
</details>

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
title | 标题 | String  | - | 返回
content | 内容 | String | - | -

### Events
 事件名称 | 说明 | 回调参数 |
---|---|---|
back | 点击左侧区域触发 | - |

### Slots
 参数 | 说明 |
---|---|---|---|---|
title | 标题内容 | 
content | 内容 |

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    goBack(){
      console.log('go back');
    }
  }
}
</script>

<style scope>
  .boxPage {
    margin: 20px 0;
    width: 100%;
    height: 45px;
    padding-top: 20px;
    padding-left: 20px;
    border:1px solid  #cad3c3;
    border-radius: 2px;
  }
</style>