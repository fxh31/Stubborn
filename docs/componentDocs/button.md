# Button 按钮
常用的操作按。

### 基础按钮
基础的按钮展示。
<div class="boxButton" >
<div class="item" style="display: flex">
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

### 文字按钮
没有边框和背景颜色的按钮。

<div class="text-btn">
  <s-button type="text">主要按钮</s-button>
  <s-button type="text"
      disabled >主要按钮</s-button>
</div>

<details>
<summary>查看源码</summary>

```vue
<div>
  <s-button type="text">主要按钮</s-button>
  <s-button type="text" disabled >主要按钮</s-button>
</div>
```
</details>

### 不同尺寸
Button按钮提供除了默认值的其他三种尺寸，来满足对大小场景的需求。

<div class="text-btn">
  <div class="item">
      <s-button size="large">大型按钮</s-button>
      <s-button>默认按钮</s-button>
      <s-button size="medium">中型按钮</s-button>
      <s-button size="small">小型按钮</s-button>
  </div>
  <div>
      <s-button size="large" round>大型按钮</s-button>
      <s-button round>默认按钮</s-button>
      <s-button size="medium" round>中型按钮</s-button>
      <s-button size="small" round>小型按钮</s-button>
  </div>
</div>

<details>
<summary>查看源码</summary>

```vue
  <div>
    <s-button size="large">大型按钮</s-button>
    <s-button>默认按钮</s-button>
    <s-button size="medium">中型按钮</s-button>
    <s-button size="small">小型按钮</s-button>
  </div>
  <div>
    <s-button size="large" round>大型按钮<s-button>
    <s-button round>默认按钮</s-button>
    <s-button size="medium" round>中型按钮<s-button>
    <s-button size="small" round>小型按钮<s-button>
  </div>

```
</details>

> 通过`size`属性来配置尺寸，额外的值有`small` , `medium` , `large` 。

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
size | 尺寸 | String | small/medium/large | —
type | 类型 | String | primary/success/warning/danger/info/text | -
round | 是否是圆角按钮 | Boolean | - | false
circle | 是否是圆形按钮 | Boolean | - | false
disabled | 是否禁用状态 | Boolean | - | false

<style scope>
  
/* .box {
  display: flex;
  flex-direction: column;
  -bottom: 5px;
} */
.boxButton {

}
.item {
  margin-bottom: 5px;
  
}
.item>button {
  margin-right: 5px;
}
.text-btn {
  margin-bottom: 15px;
}
</style>