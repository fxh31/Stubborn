# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基础用法
<div class="box">
  <s-button type="text"
      @click="visible = true">点击打开Dialog</s-button>
  <s-dialog top="200px"
        :visible.sync="visible"
        :show-close=true>
        <ul>
          <li>自定义插槽内容1</li>
          <li>自定义插槽内容2</li>
        </ul>
        <template v-slot:footer>
          <s-button size="small"
            @click="visible = false">取消</s-button>
          <s-button size="small"
            type="primary"
            @click="visible = false">确定</s-button>
        </template>
  </s-dialog>

</div>

<details>
<summary>查看源码</summary>

```vue
<s-button type="text" @click="visible = true">点击打开Dialog</s-button>
<s-dialog top="200px"
      :visible.sync="visible"
      :show-close=true>
      <ul>
        <li>自定义插槽内容1</li>
        <li>自定义插槽内容2</li>
      </ul>
      <template v-slot:footer>
        <s-button size="small"
          @click="visible = false">取消</s-button>
        <s-button size="small"
          type="primary"
          @click="visible = false">确定</s-button>
      </template>
</s-dialog>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  }
}
</script>
```
</details>

> 通过`visible`来控制弹出框的显示和隐藏。

<script>
export default {
  data() {
    return {
      visible: false,
    }
  }
}
</script>

<style>
  .box{
    margin: 20px 0;
  }
</style>

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
visible | 是否显示Dialog，支持.sync修饰符 | Boolean | - | false
title | Dialog 的标题，也可通过具名 slot （见下表）传入 | String | - | -
width | Dialog 的宽度 | String | - | 30%
top | Dialog CSS 中的 margin-top 值 | String | - | 15vh
show-close | 是否显示关闭按钮 | Boolean | - | true

### Slot
 name | 说明 
---|---|
 - |  Dialog 的内容
 title |  Dialog 标题区的内容
 footer |  Dialog 按钮操作区的内容
