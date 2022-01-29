# Card 卡片
将信息聚合在卡片区域内显示。

### 简单卡片
卡片区域只有内容可以展示  
<div>
  <s-card :width='300'
      :height='100'
      class="item"
      summary="我是内容概述">
  </s-card>  
</div>
<details>
<summary>查看源码</summary>
```vue
<s-card :width='300'
      :height='100'
      summary="我是内容概述">
</s-card>
<style>
.item .s-card-summary {
  font-size: 16px;
  text-align: center;
}
.item {
  padding: 10px 0;
}
</style>
```
</details>

> 注：summary中内容也可以直接编辑在`<s-card></s-card>`中，效果是一样的；同时写的时候优先展示summary中的内容，组件模块中书写的内容将被忽略

### 基础用法
卡片区域包括header，summary和footer部分。
<div>
  <s-card >
      <template v-slot:header>
        <span>卡片标题</span>
      </template>
      <div v-for="o in 4"
        :key="o"
        class="text item">
        {{'我是内容概要 ' + o }}
      </div>
      <template v-slot:footer>
        <div class="footer">
          我是底部内容
        </div>
      </template>
  </s-card>
</div>

<details>  
<summary>查看源码</summary>

```vue
<s-card :width='300'>
      <template v-slot:header>
        <span>卡片标题</span>
      </template>
      <div v-for="o in 4"
        :key="o"
        class="text item">
        {{'我是内容概要 ' + o }}
      </div>
      <template v-slot:footer>
        <div class="footer">
          我是底部内容
        </div>
      </template>
</s-card>
<style>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
  color: #9199a1;
}
.text {
  font-size: 14px;
}
.item {
  padding: 10px 0;
}
</style>
```
</details>

### 带图片
可配置更丰富的视觉体验卡片。 
<div>
<s-card imgSrc="https://img2.baidu.com/it/u=1668268502,3611494796&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
      :width='300' 
      summary="启：与你第一次相遇">
      <template v-slot:footer>
        <div class="footer">
          我是底部内容
        </div>
      </template>
</s-card>  
</div>
<details> 
<summary>查看源码</summary> 
```vue
<s-card imgSrc="https://img2.baidu.com/it/u=1668268502,3611494796&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
      :width='300'
      summary="与你第一次相遇">
      <template v-slot:footer>
        <div class="footer">
          我是底部内容
        </div>
      </template>
</s-card>
<style>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
  color: #9199a1;
}
</style>
```
</details>

> 通过imgSrc可以快速插入图片
### Attributes
 参数 | 说明 |类型|是否必要|默认值|
---|---|---|---|---|
width | 卡片宽度 | Number | false | 270
height | 卡片高度 | Number | false | 被内容撑开
imgSrc | 图片资源 | String | false | /
imgHeight | 图片高度 | Number | false | 152
summary | 内容概要 | String | false | /

<style scope>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
  color: #9199a1;
}
.item .s-card-summary {
  font-size: 16px;
  text-align: center;
}
.item {
  padding: 10px 0;
}
.text {
  font-size: 14px;
}
</style>