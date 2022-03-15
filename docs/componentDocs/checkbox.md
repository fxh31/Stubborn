# Checkbox 复选框
对一个或一组备选项中进行选择。

### 基础用法
 
<div class="box">
  <s-checkbox v-model="value">备选项</s-checkbox>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-checkbox v-model="value">备选项</s-checkbox>

<script>
export default {
  data() {
    return {
      value: true
    }
  }
}
</script>
```
</details>

> 在s-checkbox元素中定义`v-model`绑定变量，单一的checkbox中，默认绑定变量的值会是`Boolean`，选中为true。

### 禁用状态
复选框不可用状态。
<div class='box2'>
  <div class="box">
    <s-checkbox v-model="value1" disabled>备选项</s-checkbox>
  </div>
  <div class="box">
    <s-checkbox v-model="value2" disabled>备选项</s-checkbox>
  </div>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-checkbox v-model="value1" disabled>备选项1</s-checkbox>
<s-checkbox v-model="value2" disabled>备选项2</s-checkbox>

<script>
export default {
  data() {
    return {
      value1: false,
      value2: true
    }
  }
}
</script>
```
</details>

> 设置`disabled`属性来控制是否禁用，根据`v-model`绑定的值来判断复选框内是否勾选。

### 复选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
<div>
  <s-checkbox-group horizontal :options="data" :width=60></s-checkbox-group>
</div>

<details>  
<summary>查看源码</summary>

```vue
<s-checkbox-group horizontal :options="data" :width=60></s-checkbox-group>

<script>
export default {
  data() {
    return {
      data: [
        { label: '备选项一', value: 21, name: '备选项一', disabled: true },
        { label: '备选项二', value: 22, name: '备选项二', disabledChecked: true },
        { label: '备选项三', value: 22, name: '备选项三', checkedItem: true },
        { label: '备选项四', value: 24, name: '备选项四' },
      ]
    }
  }
}
</script>
```
</details>

> 复选框组的配置与单个复选框有所不同，通过`options`数组来进行复选框的配置，`options`是必选项。

### Checkbox Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
v-model | 绑定值 | Boolean | - | -
disabled | 是否禁用 | Boolean | - | false
label | 文本输入显示（优先级比直接写在中间低） | String | - | -


### Checkbox Events
 事件名称 | 说明 | 回调参数 |
---|---|---|
change | 当绑定值发生变化时触发事件 | 更新后的值 |

### Checkbox-group Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
width | 各个复选框之间的距离，不可以小于50 | Number | - | 50
horizontal | 是否横向排列 | Boolean | - | false
options | 复选框配置项 | Array | - | -

### Checkbox-group Events
 事件名称 | 说明 | 回调参数 |
---|---|---|
change | 当绑定值发生变化时触发事件 | (event: Event)(data:当前点击对象,index:当前点击对象索引) |
click | 点击复选框是触发事件 | (event: Event)(value:当前点击复选框的checked值-Boolean) |

### Options
 参数 | 说明 |类型|可选值|默认值|
  ---|---|---|---|---|
label | 复选框的label | String | - | -
name | 复选框name | String | - | -
value | 复选框value | String | - | -
disabled | 是否禁用（未选中状态） | Boolean | - | -
disabledChecked | 是否禁用（选中状态） | Boolean | - | -
checkedItem | 是否显示选中状态 | Boolean | - | -



<script>
export default {
  data() {
    return {
      value: true,
      value1: false,
      value2: true,
      value3: '',
      value4: '',
      value5: '',
      value6:'',
      data: [
        { label: '备选项一', value: 21, name: '备选项一', disabled: true },
        { label: '备选项二', value: 22, name: '备选项二', disabledChecked: true },
        { label: '备选项三', value: 22, name: '备选项三', checkedItem: true },
        { label: '备选项四', value: 24, name: '备选项四' },
      ]
    }
  }
}
</script>

<style scope>
.box {
  margin:20px 0;
  width:100px;
}

.box2 {
  display: flex;
}
</style>