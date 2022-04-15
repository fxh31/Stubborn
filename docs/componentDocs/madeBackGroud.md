# 定制背景
定制专属于自己的特色背景，背景采用渐变流动的样式，提高页面的观赏性，适用于制作首页等需要突出重点时运用的强烈鲜明颜色。背景以最长的一边为参考，适配于各种场景。

### 颜色配置
通过设置五个色圈的RGB值来制作专属的背景。

<div class="jbTitle">主色调</div>
<div class="jbBox">
  <label for="r">r值：</label>
  <input type="range" max="255" min="0" step="1" ref="r" @change="change1">
  <span>{{r}}</span>
  <label for="g">g值：</label>
  <input type="range" max="255" min="0" step="1" ref="g" @change="change1">
  <span>{{g}}</span>
  <label for="b">b值：</label>
  <input type="range" max="255" min="0" step="1" ref="b" @change="change1">
  <span>{{b}}</span>
</div>
<div class="jbTitle">渐变色圈一（rgb）</div>
<div class="jbBox">
  <label for="r1">r1值：</label>
  <input type="range" max="255" min="0" step="1" ref="r1" @change="change1">
  <span>{{r1}}</span>
  <label for="g1">g1值：</label>
  <input type="range" max="255" min="0" step="1" ref="g1" @change="change1">
  <span>{{g1}}</span>
  <label for="b1">b1值：</label>
  <input type="range" max="255" min="0" step="1" ref="b1" @change="change1">
  <span>{{b1}}</span>
</div>
<div class="jbTitle">渐变色圈二（rgb）</div>
<div class="jbBox">
  <label for="r">r2值：</label>
  <input type="range" max="255" min="0" step="1" ref="r2" @change="change1">
  <span>{{r2}}</span>
  <label for="g">g2值：</label>
  <input type="range" max="255" min="0" step="1" ref="g2" @change="change1">
  <span>{{g2}}</span>
  <label for="b">b2值：</label>
  <input type="range" max="255" min="0" step="1" ref="b2" @change="change1">
  <span>{{b2}}</span>
</div>
<div class="jbTitle">渐变色圈三（rgb）</div>
<div class="jbBox">
  <label for="r3">r3值：</label>
  <input type="range" max="255" min="0" step="1" ref="r3" @change="change1">
  <span>{{r3}}</span>
  <label for="g3">g3值：</label>
  <input type="range" max="255" min="0" step="1" ref="g3" @change="change1">
  <span>{{g3}}</span>
  <label for="b3">b3值：</label>
  <input type="range" max="255" min="0" step="1" ref="b3" @change="change1">
  <span>{{b3}}</span>
</div>
<div class="jbTitle">渐变色圈四（rgb）</div>
<div class="jbBox">
  <label for="r4">r4值：</label>
  <input type="range" max="255" min="0" step="1" ref="r4" @change="change1">
  <span>{{r4}}</span>
  <label for="g4">g4值：</label>
  <input type="range" max="255" min="0" step="1" ref="g4" @change="change1">
  <span>{{g4}}</span>
  <label for="b4">b4值：</label>
  <input type="range" max="255" min="0" step="1" ref="b4" @change="change1">
  <span>{{b4}}</span>
</div>
<div class="jbTitle">渐变色圈五（rgb）</div>
<div class="lastDiv jbBox">
  <label for="r5">r5值：</label>
  <input type="range" max="255" min="0" step="1" ref="r5" @change="change1">
  <span>{{r5}}</span>
  <label for="g5">g5值：</label>
  <input type="range" max="255" min="0" step="1" ref="g5" @change="change1">
  <span>{{g5}}</span>
  <label for="b5">b5值：</label>
  <input type="range" max="255" min="0" step="1" ref="b5" @change="change1">
  <span>{{b5}}</span>
</div>
<div class="testBox" ref="box"></div>

> 渐变色圈由外到内，下面是背景样式应用示例：

<s-md class="t1" :bgData="daat1"></s-md>


<script>
export default {
  data() {
    return {
      r:'',
      g:'',
      b:'',
      r1:'',
      r2:'',
      g1:'',
      g2:'',
      b1:'',
      b2:'',
      r3:'',
      g3:'',
      b3:'',
      r4:'',
      g4:'',
      b4:'',
      r5:'',
      g5:'',
      b5:'',
      daat1: {
        r:'',g:'',b:'',r1:'',r2:'',g1:'',g2:'',b1:'',b2:'',r3:'',g3:'',b3:'',r4:'',g4:'',b4:'',r5:'',g5:'',b5:''}
    }
  },
  mounted() {
    this.change1()
  },
  computed: {
    changeData() {
      const {r,g,b,r1,g1,b1,r2,g2,b2,r3,g3,b3,r4,g4,b4,r5,g5,b5} =this;
      return {r,g,b,r1,g1,b1,r2,g2,b2,r3,g3,b3,r4,g4,b4,r5,g5,b5}
    }
  },
  watch: {
    changeData() {
      let data2 ={};
      data2.r = this.$refs.r.value
      data2.g = this.$refs.g.value
      data2.b = this.$refs.b.value

      data2.r1 = this.$refs.r1.value
      data2.g1 = this.$refs.g1.value
      data2.b1 = this.$refs.b1.value
      data2.r2 = this.$refs.r2.value
      data2.g2 = this.$refs.g2.value
      data2.b2 = this.$refs.b2.value

      data2.r3 = this.$refs.r3.value
      data2.g3 = this.$refs.g3.value
      data2.b3 = this.$refs.b3.value

      data2.r4 = this.$refs.r4.value
      data2.g4 = this.$refs.g4.value
      data2.b4 = this.$refs.b4.value

      data2.r5 = this.$refs.r5.value
      data2.g5 = this.$refs.g5.value
      data2.b5 = this.$refs.b5.value
      this.daat1 = data2;
    }
  },
  methods: {
    change1() {
      this.r = this.$refs.r.value
      this.g = this.$refs.g.value
      this.b = this.$refs.b.value
      this.r1 = this.$refs.r1.value
      this.g1 = this.$refs.g1.value
      this.b1 = this.$refs.b1.value
      this.r2 = this.$refs.r2.value
      this.g2 = this.$refs.g2.value
      this.b2 = this.$refs.b2.value

      this.r3 = this.$refs.r3.value
      this.g3 = this.$refs.g3.value
      this.b3 = this.$refs.b3.value

      this.r4 = this.$refs.r4.value
      this.g4 = this.$refs.g4.value
      this.b4 = this.$refs.b4.value

      this.r5 = this.$refs.r5.value
      this.g5 = this.$refs.g5.value
      this.b5 = this.$refs.b5.value
      
      this.daat1.r = this.$refs.r.value
      this.daat1.g = this.$refs.g.value
      this.daat1.b = this.$refs.b.value

      this.daat1.r1 = this.$refs.r1.value
      this.daat1.g1 = this.$refs.g1.value
      this.daat1.b1 = this.$refs.b1.value
      this.daat1.r2 = this.$refs.r2.value
      this.daat1.g2 = this.$refs.g2.value
      this.daat1.b2 = this.$refs.b2.value

      this.daat1.r3 = this.$refs.r3.value
      this.daat1.g3 = this.$refs.g3.value
      this.daat1.b3 = this.$refs.b3.value

      this.daat1.r4 = this.$refs.r4.value
      this.daat1.g4 = this.$refs.g4.value
      this.daat1.b4 = this.$refs.b4.value

      this.daat1.r5 = this.$refs.r5.value
      this.daat1.g5 = this.$refs.g5.value
      this.daat1.b5 = this.$refs.b5.value
  
       this.$refs.box.style.backgroundImage='radial-gradient(closest-side,rgba('+this.r1+','+this.g1+','+this.b1+',1),rgba('+this.r1+','+this.g1+','+this.b1+',0)),radial-gradient(closest-side,rgba('+this.r2+','+this.g2+','+this.b2+',1),rgba('+this.r2+','+this.g2+','+this.b2+',0)),radial-gradient(closest-side,rgba('+this.r3+','+this.g3+','+this.b3+','+'1),rgba('+this.r3+','+this.g3+','+this.b3+',0)),radial-gradient(closest-side,rgba('+this.r4+','+this.g4+','+this.b4+',1),rgba('+this.r4+','+this.g4+','+this.b4+',0)),radial-gradient(closest-side,rgba('+this.r5+','+this.g5+','+this.b5+',1),rgba('+this.r5+','+this.g5+','+this.b5+',0))';

       this.$refs.box.style.backgroundColor = 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';

    }
  }
}
</script>

<details>
<summary>查看源码</summary>

```vue
<s-md :bgData="bgData"></s-md>

<script>
export default {
  data() {
    return {
      bgData:{
              r:225,g:225,b:225,r1:225,r2:225,g1:225,g2:225,b1:225,
              b2:225,r3:225,g3:225,b3:225,r4:225,g4:225,
              b4:225,r5:225,g5:225,b5:225}
          } 
    }
  },
  methods: {
  }
}
</script>
```
</details>

>通过`bgData`传入对应的值，可设置背景。

### Attributes
 参数 | 说明 |类型|可选值|默认值|
---|---|---|---|---|
bgData | 传入rgb值 | Object  | - | -

### Slots
 参数 | 说明 |
---|---|
- | 内嵌 HTML 文本 |

### 示例

<s-md style="margin-top:20px"><span class="exampleBg">stubborn-ui</span></s-md>

<s-md class="exampleBg2" style="margin-top:20px"><span class="exampleBg">just for you</span></s-md>

### 示例参数
>（粉调）r:255,g:105,b:180,r1:235,g1:105,b1:78,r2:234,g2:11,b2:164,r3:254,g3:234,b3:131,r4:170,g4:142,b4:245,r5:248,g5:192,b5:147
   (绿调）r:65,g:174,b:60,r1:114,g1:175,b1:211,r2:0,g2:158,b2:253,r3:42,g3:245,b3:152,r4:249,g4:245,b4:134,r5:150,g5:251,b5:196

<style>
  .testBox {
    width: 200px;
    height: 100px;
    margin:20px auto;
    /* border:1px solid #000; */
  }
.jbTitle{
  font-size:18px;
  margin: 10px 0; 
  /* font-weight: bold; */
}
.lastDiv{
  margin-bottom:10px;
}
.jbBox {
  font-size: 14px;
  display:flex;
  justify-content: space-around;
}
.jbBox label{
  font-weight:bold;
}
.exampleBg {
    display: inline-block;
    width: 112px;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: #f1f0ed;
}
.exampleBg2.s-md{
  background-color: #e493d0;
  background-image: radial-gradient(closest-side,rgba(235,105,78,1),rgba(235,105,78,0)),
  radial-gradient(closest-side,rgba(243,11,164,1),rgba(243,11,164,0)),
  radial-gradient(closest-side,rgba(254,234,131,1),rgba(254,234,131,0)),
  radial-gradient(closest-side,rgba(170,142,245,1),rgba(170,142,245,0)),
  radial-gradient(closest-side,rgba(248,192,147,1),rgba(248,192,147,0));
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