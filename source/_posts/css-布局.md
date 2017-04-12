layout: post
title: css 布局
date: 2015-02-02 23:08:36
tags: 布局
categories: css
---

> css布局的根本离不开以下3个基本概念：定位、浮动、外边距。

<!--more-->

### 固定布局

### 流式布局

### 弹性布局-FlexBox
css3新增布局模块，用于实现容器里项目的对齐、方法、排序。最大特点：可以动态修改子元素的宽度和高度，满足不同尺寸的屏幕。
<img src="/img/flexbox.png">
* 弹性容器(flex container)
* 弹性子元素(flex item)
* 轴分为主轴(main axis)侧轴(cross axis)
* 弹性容器的主轴开始(main start)主轴结束(main end)、侧轴开始(cross start)侧轴结束(cross end)代表弹性子元素排列的起始和结束位置。
* 主轴尺寸（main size）：伸缩项目在主轴方向的宽度或高度就是主轴的尺寸。
* 侧轴尺寸（cross size）：伸缩项目的在侧轴方向的宽度或高度就是项目的侧轴长度，伸缩项目的侧轴长度属性是「width」或「height」属性，由哪一个对着侧轴方向决定。

[demo](http://codepen.io/lcq0202/pen/GWoBRm)

### 多列属性