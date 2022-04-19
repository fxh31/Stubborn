# madeBackwards 定制倒计时
定制专属的倒计时样式，倒计时采用线条流逝，适用于从一个背景进入下一个背景的切换。点击计时器计时开始。


<div class="boxMbw">
  <s-mbw :strokeColor="color" :fontSize="fontSize" :seconds="time">
</s-mbw>
</div>

### 参数配置

<div class="mbw-title">外圈颜色</div>
<div class="mbw-box">
  <label>r值：</label>
  <input type="range" max="255" min="0" step="1" ref="r" @change="changeMbwValue">
  <span>{{r}}</span>
  <label>g值：</label>
  <input type="range" max="255" min="0" step="1" ref="g" @change="changeMbwValue">
  <span>{{g}}</span>
  <label>b值：</label>
  <input type="range" max="255" min="0" step="1" ref="b" @change="changeMbwValue">
  <span>{{b}}</span>
</div>
<div class="mbw-title">其他配置</div>
<div class="mbw-box2">
  <!-- <label>外圈大小：</label>
  <input type="range" max="255" min="0" step="1" ref="size" @change="changeMbwValue">
  <span>{{size}}</span> -->
  <label>字体大小：</label>
  <input type="range" max="80" min="0" step="1" ref="fontSize" @change="changeMbwValue">
  <span>{{fontSize}}</span>
  <label>时间：</label>
  <input type="range" max="120" min="0" step="1" ref="time" @change="changeMbwValue">
  <span>{{time}}s</span>
</div>

<details>
<summary>查看源码</summary>

```vue
<s-mbw strokeColor="#96c24e" :fontSize=10 :seconds=10>
</s-mbw>
```
</details>

>通过设置对应的参数，可自定义定时器。

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
strokeColor | 边框颜色 | String  | - | #96c24e
fontSize | 字体大小 | Number  | - | 60
time | 时间 | Number  | <= 120s | 10


<script>
export default {
  data() {
    return {
      r:150,
      g:197,
      b:78,
      // size:120,
      fontSize:60,
      time:10
    } 
  },
  mounted() {
    
  },
  methods: {
    changeMbwValue() {
      this.r = this.$refs.r.value;
      this.g = this.$refs.g.value;
      this.b = this.$refs.b.value;
      // this.size = Number(this.$refs.size.value);
      this.fontSize = Number(this.$refs.fontSize.value);
      this.time =  Number(this.$refs.time.value);
    }
  },
  computed: {
    color() {
      return 'rgb('+this.r+','+this.g+','+this.b+')'
    }
  },
  watch: {
    fontSize() {
      // console.log(this.fontSize)
    }
  }
}
</script>


<style>
.boxMbw {
 padding-left:39%;
 margin: 20px 0;
}
.mbw-title {
  margin:10px 0;
  font-weight: bold;
}
.mbw-box {
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.mbw-box2 {
   margin-bottom: 20px;
}
.mbw-box2 span{
  margin-right: 20px;
}
.mbw-box>input{
  margin-left:-30px;
}
 /*滑动条背景*/
  input[type="range"] {
    -webkit-appearance: none;
    width: 100px;
    height: 10px;
    border:1px solid #cad3c3;
    border-radius: 12px;
  }
  input[type="range"]::-ms-fill-lower {
    -webkit-appearance: none;
    background: #f00;
  }
  /*滑动条操作按钮样式*/
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius:100%;
    background: #96c24e;
    box-shadow: 0px 0px 6px 0px #cad3c3;
    cursor: pointer;
  }
</style>