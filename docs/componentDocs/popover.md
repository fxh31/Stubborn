# Popover 弹出框

### 基础用法
<div class="boxPop">
  <s-popover trigger="hover"
      :width="100"
      content="这是一段内容"
      title="标题" style="width:100px;margin-right:10px;">
      <s-button slot="reference">hover 激活</s-button>
    </s-popover>
    <s-popover trigger="click"
      :width="100"
      content="这是一段内容"
      title="标题" style="width:100px;margin-right:10px;">
      <s-button slot="reference">click 激活</s-button>
    </s-popover>
    <s-popover trigger="manual"
      :width="100"
      content="这是一段内容"
      title="标题" style="width:100px;margin-right:10px;">
      <s-button slot="reference">手动激活</s-button>
    </s-popover>
</div>



<details>
<summary>查看源码</summary>

```vue
<s-popover trigger="hover"
          :width="100"
          content="这是一段内容"
          title="标题">
  <s-button slot="reference">hover 激活</s-button>
</s-popover>
<s-popover trigger="click"
          :width="100"
          content="这是一段内容"
          title="标题">
  <s-button slot="reference">click 激活</s-button>
</s-popover>
<s-popover trigger="manual"
          :width="100"
          content="这是一段内容"
          title="标题">
  <s-button slot="reference">手动激活</s-button>
</s-popover>
```
</details>

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
trigger | 触发方式	 | click/hover/manual  | - | click
title | 标题 | String | - | -
content | 显示的内容，也可以通过 slot 传入 DOM | Number | - | -
width | 宽度 | Number | - | 最小宽度 150px
visible-arrow | 是否显示箭头 | Boolean | - | true

### Slots
 参数 | 说明 |
---|---|---|---|---|
 - | Popover 内嵌 HTML 文本 | 
reference | 触发 Popover 显示的 HTML 元素 |

### Events
 事件名称 | 说明 | 回调参数 |
---|---|---|
show | 显示时触发 | - |
after-enter	 | 显示动画播放完毕后触发 | - |
hide | 隐藏时触发 | - |
after-leave | 隐藏动画播放完毕后触发 | - |

<style scope>
  .boxPop {
    display: flex;
    margin: 20px 0;
  }
</style>