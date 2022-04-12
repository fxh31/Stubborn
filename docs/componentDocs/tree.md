# Tree 树形控件
用清晰的层级结构展示简单的信息，可展开或折叠。

### 基本用法
基础的树形结构展示。

<div class="box">
  <s-tree :treeData="treeData"></s-tree>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-tree :treeData="treeData"></s-tree>

<script>
export default {
  data() {
    return {
      treeData: {
        label: "一级1",
        children:[
          {
            label:"二级1",
            children:[
              {label:"三级1"},
              {label:"三级2"}
            ]
          },
          
        ]
      }
    }
  }
}
</script>
```
</details>

> 通过绑定`treeData`来显示树形结构。

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
treeData | 展示数据 | Object | - | -
props | 配置选项，具体看下表 | Object | - | -

### props
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
label | 指定节点标签为节点对象的某个属性值 | String | - | -
children | 指定子树为节点对象的某个属性值 | String | - | -

<script>
export default {
  data() {
    return {
      treeData: {
        label: "一级1",
        children:[
          {
            label:"二级1",
            children:[
              {label:"三级1"},
              {label:"三级2"}
            ]
          },
          
        ]
      }
      
    }
  }
}
</script>

<style>
  .box{
    margin: 20px 0;
  }
</style>
