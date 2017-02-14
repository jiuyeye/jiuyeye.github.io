layout: post
title: js移动端开发
date: 2016-11-24 23:19:39
tags: 移动端
categories: js
---

触摸事件介绍

<!-- more -->

## 基础事件
touchstart:当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
```javascript
ddddd
```
touchmove:当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
```javascript

```
touchend:当手指从屏幕上离开的时候触发。
```javascript

```
touchcancel事件:当系统停止跟踪触摸的时候触发。关于这个事件的确切出发时间，文档中并没有具体说明，咱们只能去猜测了。

## event对象

## 触摸事件(touchEvent)

## 2D变换(transform2D)

## 动画(transition)

## 3D动画(transform3D)

## 3D桌面切换

## 自定义滚动条

## 多指触控事件

## 移动端手势js框架介绍
**Hammer.js**
`Hammer.js`是一个专门用于控制、定制手势的轻量级JavaScript框架，可以识别出常见的触摸、拖动、长按、缩放等手势。支持Android、BlackBerry、iOS及Windows触屏设备。

**jQueryUI**
`jQueryUI`是一套jQuery JS库的页面UI插件，包含多种常用的页面空间，比如Tabs、拉帘效果、对话框、拖放效果、日期选择、颜色选择、数据排序、窗体大小调整等。能够让开发者轻而易举地制作出一个高度交互的Web应用。

**FastClick**
`FastClick`是一个非常方便的库，在移动浏览器上发生介于轻敲及点击之间的指令时，能够让你摆脱300毫秒的延迟。FastClick可以让你的应用程序更加灵敏迅捷。支持各种移动浏览器，比如Safari、Chrome、Opera等。

**Swipe**
`Swipe`是一个轻量级的移动滑动组件，支持1:1的触摸移动、阻力及防滑。Swipe为移动版Web应用带来了全新的交互方式，可以让移动App展现更多的内容。

**Jo**
`Jo`允许开发者使用相同代码开发出原生移动App或Web应用，可以让你使用CSS快速调整应用，支持iOS、Android、webOS、BlackBerry及Chrome OS等平台。Jo最大的优势莫过于操作起来方便简单、开源且又免费。

**Quo JS**
`Quo JS`是一个轻量级的小型、模块化、面向对象的JavaScript库，用于移动Web开发中简化HTML文件遍历、事件处理及Ajax交互等，可以让开发者轻松编写出高效的跨浏览器代码。总的来说，Quo JS允许创建复杂项目及基于浏览器的App，是一个非常伟大的触摸事件管理器。

**FooTable**
`FooTable`是一个高级jQuery插件，允许开发者在触屏智能手机及平板电脑等小型设备上制作数据非常惊人的HTML表格。它可以将HTML表转换成可扩展的响应式表格，且通过单击某一行即可将该行数据隐藏起来。

**TinyNav.js**
`TinyNav.js`是一个小型jQuery插件，能够对小型屏幕上的下拉菜单导航实现`<ul><ol>`的转换。还能对当前页面进行选择，并对一个项目添加selected=”selected”。它是一个非常有效的插件，提供了一些非常不错的功能。

**JQUERY.PEP.JS**
`JQUERY.PEP.JS`也是一个小型jQuery插件，结合了jQuery动画和CSS3动画，在移动和桌面设备上实现Kinetic Drag。JQUERY.PEP.JS支持自定义启动、停止、休眠及拖拽事件、约束父体或视窗对象。

**Pointer.js**
`Pointer.js`是一个非常酷的工具，能够让触摸及鼠标系统统一起来。这是未来的需要，因为在未来，触摸操作势必会更加风行，而鼠标的使用将会大幅减低。