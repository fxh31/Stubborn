# Link 超链接
文字超链接。

### 基础用法
基础的文字超链接用法。
<div class="boxLink">
  <s-link href="#">默认链接</s-link>
  <s-link href="#" type="primary">主要链接</s-link>
  <s-link href="#" type="success">成功链接</s-link>
  <s-link href="#" type="warning">警告链接</s-link>
  <s-link href="#" type="danger">危险链接</s-link>
  <s-link href="#" type="info">信息链接</s-link>
</div>

<details>
<summary>查看源码</summary>

```vue
<div>
  <s-link href="#">默认链接</s-link>
  <s-link href="#" type="primary">主要链接</s-link>
  <s-link href="#" type="success">成功链接</s-link>
  <s-link href="#" type="warning">警告链接</s-link>
  <s-link href="#" type="danger">危险链接</s-link>
  <s-link href="#" type="info">信息链接</s-link>
</div>
```
</details> 

### 下划线
文字链接下划线。 

<div class='box1'>
  <s-link href="#" class="noline" :underline="false">无下划线</s-link>
  <s-link href="#">有下划线</s-link>
</div>

<details>
<summary>查看源码</summary>

```vue
<div>
 <s-link href="#" :underline="false">无下划线</s-link>
 <s-link href="#">有下划线</s-link>
</div>
```
</details>

> 通过`underline`属性来设置下划线。

### 禁用状态
文字链接不可用。

<div class="box1">
  <s-link href="#" class="noline"  disabled>默认链接</s-link>
  <s-link href="#" class="noline" type="primary" disabled>主要链接</s-link>
  <s-link href="#" class="noline" type="success" disabled>成功链接</s-link>
  <s-link href="#" class="noline" type="warning" disabled>警告链接</s-link>
  <s-link href="#" class="noline" type="danger" disabled>危险链接</s-link>
  <s-link href="#" class="noline" type="info" disabled>信息链接</s-link>
</div>

<details>
<summary>查看源码</summary>

```vue
<div>
  <s-link href="#" disabled>默认链接</s-link>
  <s-link href="#" type="primary" disabled>主要链接</s-link>
  <s-link href="#" type="success" disabled>成功链接</s-link>
  <s-link href="#" type="warning" disabled>警告链接</s-link>
  <s-link href="#" type="danger" disabled>危险链接</s-link>
  <s-link href="#" type="info" disabled>信息链接</s-link>
</div>
```
</details>

### 废弃状态
文字链接已过期或取已废用。
<div class="box1">
  <s-link class='exp' expired>默认链接</s-link>
  <s-link class='exp' type="primary" expired>主要链接</s-link>
  <s-link class='exp' type="success" expired>成功链接</s-link>
  <s-link class='exp' type="warning" expired>警告链接</s-link>
  <s-link class='exp' type="danger" expired>危险链接</s-link>
  <s-link class='exp' type="info" expired>信息链接</s-link>
</div>

<details>
<summary>查看源码</summary>

```vue
<div>
  <s-link href="#" expired>默认链接</s-link>
  <s-link href="#" type="primary" expired>主要链接</s-link>
  <s-link href="#" type="success" expired>成功链接</s-link>
  <s-link href="#" type="warning" expired>警告链接</s-link>
  <s-link href="#" type="danger" expired>危险链接</s-link>
  <s-link href="#" type="info" expired>信息链接</s-link>
</div>
```
</details>

> 注：废弃状态仍然有点击状态变化，若要不可点击请结合禁用状态使用。

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
type | 类型 | String | primary/success/warning/danger/info/text | -
underline | 是否下划线 | Boolean | - | true
disabled | 是否禁用状态 | Boolean | - | false
expired | 是否废弃状态 | Boolean | - | false
href | 原生href属性 | String | - | -

<style scope>
  
  .box1 {
    margin-bottom: 15px;
  }
  /* .jinyong {
    color: #cad3c3 !important;
    text-decoration:none !important;
  }
  .exp {
    text-decoration: line-through !important;
  } */
  .noline {
    text-decoration:none !important;
  }
  .boxLink {
    display: flex;
  }
  .boxLink a{
    width:68px;
  }
</style>