# Radio 单选框
在一组备选项中进行单选。

### 基础用法
<div class="box" style="display:flex;">
  <s-radio label="1"
      v-model="radio">备选项一</s-radio>
  <s-radio label="2"
      v-model="radio">备选项二</s-radio>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-radio label="1" v-model="radio">备选项一</s-radio>
<s-radio label="2" v-model="radio">备选项二</s-radio>

<script>
export default {
  data() {
    return {
      radio: '1'
    }
  }
}
</script>
```
</details>

> 要使用 `Radio` 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应` Radio label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

### 禁用状态
<div class="box">
  <s-radio label="1"
      v-model="radio2" disabled>备选项一</s-radio>
  <s-radio label="2"
      v-model="radio2" disabled>备选项二</s-radio>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-radio label="1" v-model="radio" disabled>备选项一</s-radio>
<s-radio label="2" v-model="radio" disabled>备选项二</s-radio>

<script>
export default {
  data() {
    return {
      radio: '1'
    }
  }
}
</script>
```
</details>

> 通过属性`disabled`来控制单选框的禁用状态。

### 单选框组
适用于在多个互斥的选项中选择的场景。
<div class="box">
  <s-radio-group v-model='radio3'>
    <s-radio label="1">备选项一</s-radio>
    <s-radio label="2">备选项二</s-radio>
    <s-radio label="3">备选项三</s-radio>
  </s-radio-group>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-radio-group v-model='radio'>
    <s-radio label="1">备选项一</s-radio>
    <s-radio label="2">备选项二</s-radio>
    <s-radio label="3">备选项三</s-radio>
</s-radio-group>

<script>
export default {
  data() {
    return {
      radio: '1'
    }
  }
}
</script>
```
</details>

> 结合`s-radio-group`元素和子元素`s-radio`可以实现单选组，在`s-radio-group`中绑定`v-model`，在`s-radio`中设置好`label`即可，无需再给每一个`s-radio`绑定变量。

### Checkbox Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
value / v-model | 绑定值 | string / number / boolean | - | -
disabled | 是否禁用 | Boolean | - | false
label | Radio 的 value | string / number / boolean | - | -
name | 原生name属性 | String | - | -


### Radio Events
 事件名称 | 说明 | 回调参数 |
---|---|---|
change | 当绑定值发生变化时触发事件 | 选中的 Radio label 值 |

### Radio-group Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
value / v-model | 绑定值 | string / number / boolean | - | -
disabled | 是否禁用 | Boolean | - | false

<script>
export default {
  data() {
    return {
      radio: '1',
      radio2: '1',
      radio3:'1'
    }
  }
}
</script>
<style>
  .box {
    diplay: flex;
    margin: 20px 0;
  }
</style>