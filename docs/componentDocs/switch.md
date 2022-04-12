# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法
<div class="box">
  <s-switch v-model="active"
      active-color="#96c24e"
      inactive-color="#dedfe6"></s-switch>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-switch v-model="active"
          active-color="#96c24e"
          inactive-color="#dedfe6">
</s-switch>

<script>
export default {
  data() {
    return {
      active: false
    }
  }
}
</script>
```
</details>

> 绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。

### 文字描述
<div class="box">
  <s-switch v-model="active2"
      active-color="#96c24e"
      inactive-color="#dedfe6"
      active-text="按月付费"
      inactive-text="按年付费"></s-switch>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-switch v-model="active"
      active-color="#96c24e"
      inactive-color="#dedfe6"
      active-text="按月付费"
      inactive-text="按年付费">
</s-switch>

<script>
export default {
  data() {
    return {
      active: false
    }
  }
}
</script>
```
</details>

> 使用active-text属性与inactive-text属性来设置开关的文字描述。

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
value / v-model | 绑定值 | Boolean / String / Number | - | -
disabled | 是否禁用 | Boolean | - | false
active-color | switch 打开时的背景色 | String | - | #96c24e
inactive-color | switch 关闭时的背景色 | String | - | #cad3c3
name | switch 对应的 name 属性 | String | - | -
active-text | switch 打开时的文字描述 | String | - | -
inactive-text | switch 关闭时的文字描述 | String | - | -

### Events
事件名称|说明|回调参数
---|---|---
change|switch 状态发生变化时的回调函数|新状态的值

<script>
export default {
  data() {
    return {
      active: false,
      active2: false
    }
  }
}
</script>

<style>
.box {
  margin: 20px 0;
}
</style>