---
title: CSS高级使用技巧
date: 2017-12-05 11:36:13
tags: css3
---
CSS3高级技巧
<!-- more -->
### 黑白图片

> filter属性，在webkit中，-webkit-filter专门为元素的渲染提供一些效果，比如灰度，亮度，模糊等。使用灰度控制grayscale属性，就可以很容易的将图片置为黑白色。

```css
img{
    -webkit-filter:grayscale(100%);
    -moz-filter:grayscale(100%);
    -ms-filter:grayscale(100%);
    -o-filter:grayscale(100%);
    filter:grayscale(100%);
}
```

### 整个页面添加顶部阴影

>利用body的伪元素:before，可以减少额外的元素;在顶部增加一个div，设置一个高度，宽度为100%;将其position设置为fixed，然后设置偏移量为设定的高度值;设置box-shadow属性，值等于设定的高度值。

```css
body:before{
    content:'';
    position:fixed;
    top:-10px;
    left:0;
    width:100%;
    height:10px;
    -webkit-box-shadow:0px 0px 10px rgba(0,0,0,.8);
    -moz-box-shadow:0px 0px 10px rgba(0,0,0,.8);
    box-shadow:0px 0px 10px rgba(0,0,0,.8);
    z-index:100;
}
```

### 所有元素垂直居中

>将与align有关的属性设置为center;displag设置为flex。

```css
html,body{
    height:100%;
    padding:0;
    margin:0;
}
body{
    -webkit-flex-align:center;
    -ms-flex-align:center;
    align-items:center;
    display:webkit-flex;
    display:flex;
}
```

### 负数的nth-child选择器

:nth-child(-n+3)，就代表选择从第一个到第三个元素。

### 表格列等宽

```css
table{
    table-layout:fixed;
}
```

### CSS3中的calc()

>用于动态的计算值，不管是数值还是百分比，都可以参与计算。

```css
.simpleblock{
    height:100px;
    width:calc(100%-10px);
}
.complexblock{
    height:100px;
    width:calc(100%-50%/3);
    padding:5px calc(3%-2px);
    margin-left:calc(10%+10px);
}
```

### 模糊文本
```css
.text{
    color:transparent;
    text-shadow:0 0 5px rgba(0,0,0,.5);
}
```