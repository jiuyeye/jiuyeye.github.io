---
title: 使用Canvas绘图
date: 2015-04-24 22:07:15
categories: canvas
---
H5添加的最受欢迎的功能就是`canvas`元素，它有几组API组成。

<!-- more -->

### 基本语法

要使用`canvas`元素，必须设置width和height，指定绘图区域大小。

```html
<canvas id="mycanvas">this is canvas</canvas>//浏览器不支持canvas就显示里面内容
```

```javascript
var mycanvas = document.getElementById("mycanvas");
if(mycanvas.getContext){//检测getContext方法是否存在
  var draw = mycanvas.getContext('2d');

  var imgUrl = mycanvas.toDataURL("image/png");//toDataURL()方法，可以导出canvas元素上绘制的图像。
  var image = document.createElement("img");
  image.src = imgUrl;
  document.body.appendChild(image);
}
```
默认情况，浏览器会将图像编码为png格式。

### 2D上下文

1. 描边和填充 

```javascript
draw.strokeStyle = "red";
draw.fillStyle = "#dd0033;
```

2. 绘制矩形 

```javascript
draw.strokeStyle = "red";
draw.fillStyle = "#dd0033;
draw.fillRect(10,10,50,50);

//再绘制一个
draw.strokeStyle = "blue";
draw.fillStyle = "#000;
draw.fillRect(40,40,50,50);

draw.clearRect(40,40,20,20)//重叠的地方清除小方形
```
3. 绘制路径

```javascript
draw.beginPath();
draw.arc(100,100,99,0,2*Math.PI,false);
draw.stroke;//描边路径
```

> 绘制文本

```javascript
draw.font = "Arial";
draw.textAlign = "center";
draw.textBaseline = "middle";
draw.fillText("12",10,20);
```
> 变换 
 
> 绘制图像 
 
```javascript
draw.drawImage(image,50,10,20,30);
```

> 阴影 

```javascript
draw.shadowColor = "rgba(0,0,0,0.5)";
draw.shadowOffsetX = 5;
draw.shadowOffsetY = 5;
draw.shadowBlur = 5;
```
> 使用图像数据 