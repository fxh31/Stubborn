# Tag 标签
用于标记和选择。

### 基础用法
<div class="box">
  <s-tag>标签一</s-tag>
  <s-tag type="primary">标签二</s-tag>
  <s-tag type="info">标签三</s-tag>
  <s-tag type="warning">标签四</s-tag>
  <s-tag type="danger">标签五</s-tag>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-tag>标签一</s-tag>
<s-tag type="primary">标签二</s-tag>
<s-tag type="info">标签三</s-tag>
<s-tag type="warning">标签四</s-tag>
<s-tag type="danger">标签五</s-tag>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
```
</details>

> tag由`type`选择基础的标签类型。想修改标签的颜色和边框可使用`color`和`borderColor`属性，详情参见参数部分。

### 可移除标签
<div class="box">
  <s-tag closable @close="close">标签一</s-tag>
  <s-tag closable type="primary">标签二</s-tag>
  <s-tag closable type="info">标签三</s-tag>
  <s-tag closable type="warning">标签四</s-tag>
  <s-tag closable type="danger">标签五</s-tag>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-tag closable @close="close">标签一</s-tag>
<s-tag closable type="primary">标签二</s-tag>
<s-tag closable type="info">标签三</s-tag>
<s-tag closable type="warning">标签四</s-tag>
<s-tag closable type="danger">标签五</s-tag>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    close() {}
  }
}
</script>
```
</details>

> `closable`控制可移除标签的显示。

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
type | Tag类型 | String | null/primary/info/warning/danger | null
closable | 是否可关闭 | Boolean | true/false | false
color | 设置标签背景颜色 | String | - | -
borderColor | 设置标签边框 | String | - | -


### Events
 事件名称 | 说明 | 回调参数 |
---|---|---|
click | 点击Tag时触发的事件 | - 
close | 关闭Tag时触发的事件 | - 

<script>
export default {
  methods: {
    close() {}
  }
}
</script>

<style>
  .box {
    margin: 20px 0;
  }
</style>