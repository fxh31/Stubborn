# Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面。

### 基础用法
适用广泛的基础用法。

<div class="boxBread">
  <s-breadcrumb separator="/">
      <s-breadcrumb-item :to="{path:'/'}">首页</s-breadcrumb-item>
      <s-breadcrumb-item><a href="/">活动管理</a></s-breadcrumb-item>
      <s-breadcrumb-item>活动列表</s-breadcrumb-item>
      <s-breadcrumb-item>活动详情</s-breadcrumb-item>
  </s-breadcrumb>
</div>



<details>
<summary>查看源码</summary>

```vue
<s-breadcrumb separator="/">
      <s-breadcrumb-item :to="{path:'/'}">首页</s-breadcrumb-item>
      <s-breadcrumb-item><a href="/">活动管理</a></s-breadcrumb-item>
      <s-breadcrumb-item>活动列表</s-breadcrumb-item>
      <s-breadcrumb-item>活动详情</s-breadcrumb-item>
  </s-breadcrumb>

```
</details>

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
separator | 分隔符 | String  | - | 斜杠'/'

### Breadcrumb Item Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
to | 路由跳转对象，同 vue-router 的 to | String  | - | -
replace | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录	 | Boolean  | - | false


<style scope>
  .boxBread {
    margin: 20px 0;
    width: 100%;
    height: 45px;
    padding-top: 20px;
    padding-left: 20px;
    border:1px solid  #cad3c3;
    border-radius: 2px;
  }
</style>