layout: post
title: javascript设计模式-学习三
date: 2013-10-23 21:57:15
tags: 设计模式
categories: js
---

不要纠结于设计模式，模式其实就是套路。

<!--more-->
### 1.命令模式 ###
用来对方法调用进行参数化处理和传送，经过这样处理过的方法调用可以在任何需要的时候执行，也就是说该模式旨在将函数的调用、请求和操作封装成一个单一对象，然后对这个对象进项一系列的处理.它也可以用来消除调用操作的对象和实现对象之间的耦合。这位各种具体的类更换带来了极大的灵活性。

作用：
1.将函数的封装、请求、调用结合为一体；
2.调用具体的函数解耦命令对象与接收对象。
3.提高程序模块化的灵活性；
注意：
1.不需要接口一致，直接调用函数即可，以免造成浪费。
```javascript
var lian={};
lian.paobing=function(num){
    console.log(num);
};
lian.bubing=function(num){
    console.log(num);
};
lian.lianzhang=function(mingling){
    lian[mingling.type](mingling.num);
};
lian.lianzhang({
    type:"bubing",
    num:100
})

```
### 2.职责链模式 ###
是使多个对象都有机会处理请求，