# Tabs 标签页
对内容题目进行切换展示。

### 基础用法
<div class="box">
  <s-tabs :tabsdata="tabsdata"></s-tabs>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-tabs :tabsdata="tabsdata"
      @tabClick="clickTab"
      :width="width"></s-tabs>

<script>
export default {
  data() {
    return {
      tabsdata: [
        {
          title: '基础管理',
        },
        {
          title: '用户管理'
        },
        {
          title: '配置管理'
        }
      ],
      width: 400
    }
  },
  methods: {
    clickTab(index) {
    }
  }
}
</script>
```
</details>

> 通过`tabsdata`数组来配置tabs的标签头。

### 选项卡样式
<div class="box">
  <s-tabs :tabsdata="tabsdata" @tabClick="clickTab" :width="width" type="line"></s-tabs>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-tabs :tabsdata="tabsdata"
      @tabClick="clickTab"
      :width="width" type="line"></s-tabs>

<script>
export default {
  data() {
    return {
      tabsdata: [
        {
          title: '基础管理'
        },
        {
          title: '用户管理'
        },
        {
          title: '配置管理'
        }
      ],
      width: 400
    }
  },
  methods: {
    clickTab(index) {
    }
  }
}
</script>
```
</details>

> 通过`type`数组来配置标签样式。

### Tabs Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
tabsdata | 配置tab显示的值 | Array | - | -
type | tabs类型 | String/Null | line/null | null
width | tabs页签的宽度 | Number | - | 600


### Tabs Events
 事件名称 | 说明 | 回调参数 |
---|---|---|
tabClick | tab被选中时触发 | 被选中tab的索引（index） |
<script>
export default {
  data() {
    return {
      tabsdata: [
        {
          title: '基础管理1',
        },
        {
          title: '用户管理'
        },
        {
          title: '配置管理'
        }
      ],
      width: 400
    }
  },
  methods: {
    clickTab() {

    }
  }
}
</script>
<style>
.box {
  margin:20px 0;
}
</style>