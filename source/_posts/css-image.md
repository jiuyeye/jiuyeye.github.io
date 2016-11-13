layout: post
title: html+css设计模式-图片篇
date: 2012-04-17 02:33:23
tags: 模式
categories: css
---

使用<img>可以在文档中插入图片，src属性可以指定图片的url。

<!-- more -->

> 使用`<img>`可以在文档中插入图片，`src`属性可以指定图片的url。
装饰性图片最好显示为背景图片，一定要使用装饰性`<img>`元素，也要加上保留空值的alt属性。

```html
<img src="url" alt="img_description" width="img_width" height="img_height">
```
图片是行内元素，以垂直对齐到所在行的基线，`vertical-align`可以调整垂直对齐方式。

经常用到的效果：
**1.图片淡出：**
可伸缩的渐变背景：
html:
```html
<div class="left-right">可伸缩的渐变背景：从左到右</div>
<div class="right-elft">可伸缩的渐变背景：从右到左</div>
<div class="up-down">可伸缩的渐变背景：从上到下</div>
<div class="down-up">可伸缩的渐变背景：从下到上</div>
```
css:
```css
.left-right{background:url("img.png") repeat-y left top color;}
.left-right{background:url("img.png") repeat-y right top color;}
.left-right{background:url("img.png") repeat-x left top color;}
.left-right{background:url("img.png") repeat-x left bottom color;}
```
**2.图片地图：**
就是锚链`map`没什么讲的。定义点击区域。
**3.半透明：**
**4.替换文字：**
HTML文本可以让搜索引擎更好的读取，平常可以将文本添加到文档中，用css隐藏并在他的位置显示一个背景图。
> `Todd Fahrner`最早提出的替换技术`FIR`，也是比较流行的。  

```html
<h1>
	<span>logo</span>
</h1>
```
```css
h1{
	background:url("logo.png") no-repeat;
	width:88px;
	height:31px;
}
h1 span{
	display:none;
}
```
但是很多阅读器会忽略display或visibility的元素。因此产生相反的效果。最好不要使用。国内基本不用考虑这个不足了。

> Phark
> sIFR

**5.内容覆盖图片：**
**6.精灵图：**
**7.阴影图片：**
**8.圆角：**