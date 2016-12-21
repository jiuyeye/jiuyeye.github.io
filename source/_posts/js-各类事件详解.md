---
title: javascript-各类事件详解
date: 2016-11-14 13:54:03
tags: 事件
categories: js
---
事件是一种异步编程的实现方式，本质上是程序各个组成部分之间的通信。DOM支持大量的事件
<!-- more -->

> JavaScript事件详解01
http://blog.csdn.net/BaiHuaXiu123/article/details/53148789  

以下写法的this对象都指向Element节点。
```javascript
// JavaScript代码
element.onclick = print
element.addEventListener('click', print, false)
element.onclick = function () {console.log(this.id);}

// HTML代码
<element onclick="console.log(this.id)">
```
以下写法的this对象，都指向全局对象。
```javascript
// JavaScript代码
element.onclick = function (){ doSomething() };
element.setAttribute('onclick', 'doSomething()');

// HTML代码
<element onclick="doSomething()">
```

> JavaScript事件传播02
http://blog.csdn.net/BaiHuaXiu123/article/details/53148842  

> JavaScript事件Event对象03
http://blog.csdn.net/BaiHuaXiu123/article/details/53148850  

> JavaScript之鼠标事件04
http://blog.csdn.net/BaiHuaXiu123/article/details/53148859  

click事件
dblclick事件
mouseup事件，mousedown事件
mousemove事件
mouseover事件，mouseenter事件
mouseout事件，mouseleave事件
contextmenu
> JavaScript之键盘事件05
http://blog.csdn.net/BaiHuaXiu123/article/details/53148868  

> JavaScript之拖拽事件06
http://blog.csdn.net/BaiHuaXiu123/article/details/53148880  

drag事件
dragstart事件
dragend事件
dragenter事件
dragover事件
dragleave事件
drop事件
> javaScript之触摸事件07
http://blog.csdn.net/BaiHuaXiu123/article/details/53148887  

触摸API由三个对象组成。
Touch
TouchList
TouchEvent
> javaScript之文档事件08
http://blog.csdn.net/BaiHuaXiu123/article/details/53148896  
