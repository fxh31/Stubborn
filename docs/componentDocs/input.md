# Input 输入框
通过键盘或鼠标输入字符。

### 基础用法
<div class="box">
  <s-input v-model="value" placeholder="请输入内容"/>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-input v-model="value" placeholder="请输入内容"/>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
</details>

>注：`input`要结合`v-model`使用，不然可能会导致输入内容不显示或输入框的方法不完整。不支持`v-model`修饰符。

### 禁用状态
<div class="box">
  <s-input v-model="value2" disabled placeholder="请输入内容"/>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-input disabled v-model="value" placeholder="请输入内容"/>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
</details>

> 通过`disabled`属性来设置输入框是否禁用。

### 可清空
<div class="box">
  <s-input v-model="value3" clear placeholder="请输入内容"/>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-input clear v-model="value" placeholder="请输入内容"/>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
</details>

> 通过`clear`属性来设置输入框是否为可清空。

### 密码框
<div class="box">
  <s-input v-model="value4" type="password" clear placeholder="请输入内容"/>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-input clear v-model="value" placeholder="请输入内容"/>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
</details>

> 将`type`设置为`password`显示密码框。

### 文本域
<div class="box">
  <s-input v-model="value5" type="textarea" placeholder="请输入内容" :rows="2"/>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-input type="textarea" v-model="value" placeholder="请输入内容"/>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
</details>

> 将`type`设置为`textarea`显示文本框。


### 输入长度限制
<div class="box">
  <s-input v-model="value6" type="textarea" placeholder="请输入内容" :maxlength="20" lengthLimitVisiable />
</div>

<details>
<summary>查看源码</summary>

```vue
<s-input v-model="value" type="textarea" placeholder="请输入内容" :maxlength="20" lengthLimitVisiable />

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
</details>

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
disabled | 是否禁用状态 | Boolean | - | false
type | 类型 | String | text,password,textarea和其他input的原生type值 | text
placeholder | 输入框展位文本 | String | - | -
clear | 是否显示可清除按钮,对`type="textarea"`有效 | Boolean | - | false
rows | 文本框行数，只对`type="textarea"`有效 | Number | - | 2
lengthLimitVisiable |  是否显示限制字数，只对`type="textarea"`有效 | Boolean | - | false
maxlength |  最大输入长度，只对`type="textarea"`有效 | Boolean | - | false

### Input Events
 事件名称 | 说明 | 回调参数 |
---|---|---|
blur | 在Input失去焦点时触发 | (event: Event) |
focus | 在 Input 获得焦点时触发 | (event: Event) |
change | 在输入框失去焦点 | (value: string , number) |
input | 在 Input 值改变时触发 | (value: string , number) |

<script>
export default {
  data() {
    return {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6:''
    }
  }
}
</script>

<style scope>
.box {
  margin:20px 0;
}
</style>