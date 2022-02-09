# Button 按钮
常用的操作按。

### 基础按钮
基础的按钮展示。
<div class="box">
<div class="item">
  <s-button>默认按钮</s-button>
  <s-button type="primary">主要按钮</s-button>
  <s-button type="success">成功按钮</s-button>
  <s-button type="info">信息按钮</s-button>
  <s-button type="warning">警告按钮</s-button>
  <s-button type="danger">危险按钮</s-button>
</div>
<div class="item">
  <s-button round>默认按钮</s-button>
  <s-button type="primary" round>主要按钮</s-button>
  <s-button type="success" round>成功按钮</s-button>
  <s-button type="info" round>信息按钮</s-button>
  <s-button type="warning" round>警告按钮</s-button>
  <s-button type="danger" round>危险按钮</s-button>
</div>
<div class="item">
  <s-button class="s-icon-search" circle></s-button>
  <s-button class="s-icon-edit" type="primary" circle ></s-button>
  <s-button  class="s-icon-success" type="success" circle></s-button>
  <s-button  class="s-icon-email" type="info" circle></s-button>
  <s-button  class="s-icon-start" type="warning" circle></s-button>
  <s-button  class="s-icon-delete" type="danger" circle></s-button>
</div>
</div>

<details>
<summary>查看源码</summary>

```vue
<div>
  <s-button>默认按钮</s-button>
  <s-button type="primary">主要按钮</s-button>
  <s-button type="success">成功按钮</s-button>
  <s-button type="info">信息按钮</s-button>
  <s-button type="warning">警告按钮</s-button>
  <s-button type="danger">危险按钮</s-button>
</div>
<div>
  <s-button round>默认按钮</s-button>
  <s-button type="primary" round>主要按钮</s-button>
  <s-button type="success" round>成功按钮</s-button>
  <s-button type="info" round>信息按钮</s-button>
  <s-button type="warning" round>警告按钮</s-button>
  <s-button type="danger" round>危险按钮</s-button>
</div>
<div>
  <s-button class="s-icon-search" circle></s-button>
  <s-button class="s-icon-edit" type="primary" circle ></s-button>
  <s-button  class="s-icon-success" type="success" circle></s-button>
  <s-button  class="s-icon-email" type="info" circle></s-button>
  <s-button  class="s-icon-start" type="warning" circle></s-button>
  <s-button  class="s-icon-delete" type="danger" circle></s-button>
</div>
```
</details>

> 注：使用`type`, `round`, `circle`来定义按钮的样式。

### 禁用状态
按钮不可用。
<div class="item">
  <s-button disabled>默认按钮</s-button>
  <s-button type="primary" disabled>主要按钮</s-button>
  <s-button type="success" disabled>成功按钮</s-button>
  <s-button type="info" disabled>信息按钮</s-button>
  <s-button type="warning" disabled>警告按钮</s-button>
  <s-button type="danger" disabled>危险按钮</s-button>
</div>

<details>
<summary>查看源码</summary>

```vue
<div>
  <s-button disabled>默认按钮</s-button>
  <s-button type="primary" disabled>主要按钮</s-button>
  <s-button type="success" disabled>成功按钮</s-button>
  <s-button type="info" disabled>信息按钮</s-button>
  <s-button type="warning" disabled>警告按钮</s-button>
  <s-button type="danger" disabled>危险按钮</s-button>
</div>
```
</details>

> 注：使用`disabled`属性来判断按钮是否禁用，它接收一个`Boolean`。

<style scope>
  
/* .box {
  display: flex;
  flex-direction: column;
  -bottom: 5px;
} */
.item {
  margin-bottom: 10px;
}
</style>