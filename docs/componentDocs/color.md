# Color 色彩
为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。整体色彩采用中国传统颜色进行配置。

### 主色
stubborn主要采用的是清新的绿色。

<div class="boxColor" style="background-color: #96c24e;">
  <div class="title2">芽绿</div>
  <div class="content">#96c24e</div>
</div>

### 辅助色
除了主色外的场景色，适用于其他场景。
<div class="item">
  <div class="box1" style="background-color: #41ae3c;">
    <div class="title1">宝石绿</div>
    <div class="content1">#41ae3c</div>
    <div class="subBox">
      <div class="subBox1" style="background-color: #41ae3c;"></div>
      <div class="subBox2" style="background-color: #b9dec9;"></div>
    </div>
  </div>

  <div class="box1" style="background-color: #1772b4;">
    <div class="title1">群青</div>
    <div class="content1">#1772b4</div>
    <div class="subBox">
      <div class="subBox1" style="background-color: #1772b4;"></div>
      <div class="subBox2" style="background-color:  #91b3cf;"></div>
    </div>
  </div>
  <div class="box1" style="background-color: #e2c027;">
    <div class="title1">葵扇黄</div>
    <div class="content1">#e2c027</div>
    <div class="subBox">
      <div class="subBox1" style="background-color: #e2c027;"></div>
      <div class="subBox2" style="background-color:  #f8d86a;"></div>
    </div>
  </div>
  <div class="box1" style="background-color: #ee3f4d;">
    <div class="title1">茶花红</div>
    <div class="content1">#ee3f4d</div>
    <div class="subBox">
      <div class="subBox1" style="background-color: #ee3f4d;"></div>
      <div class="subBox2" style="background-color:  #f1939c;"></div>
    </div>
  </div>
  <div class="box1" style="background-color: #9fa39a;">
    <div class="title1">镍灰</div>
    <div class="content1">#9fa39a</div>
    <div class="subBox">
      <div class="subBox1" style="background-color: #9fa39a;"></div>
      <div class="subBox2" style="background-color:  #cad3c3;"></div>
    </div>
  </div>
</div>

### 字体颜色
组件字体风格颜色。
<div class="boxColor" style="background-color: #15231b;">
  <div class="title2">云杉绿</div>
  <div class="content">#15231b</div>
</div>


<style>
.boxColor {
  width: 350px;
  height: 150px;
  border-radius: 2px;
  position: relative;
}
.title2 {
  position: absolute;
  color: #fff;
  left: 152px;
  top: 40px;
  font-size: 18px;
}
.content {
  color: #fff;
  position: absolute;
  font-size: 15px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.box1 {
  width: 220px;
  height: 120px;
  border-radius: 2px;
  position: relative;
  margin-right: 10px;
  margin-bottom: 10px;
}
.title1 {
  position: absolute;
  color: #fff;
  left: 90px;
  top: 30px;
  font-size: 16px;
}
.item {
  display:flex;
  flex-wrap: wrap;
}
.content1 {
  color: #fff;
  position: absolute;
  font-size: 14px; 
  left: 80px;
  top: 55px;
}
.subBox1 {
  width: 50%;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.subBox2 {
  width: 50%;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>