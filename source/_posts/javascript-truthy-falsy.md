layout: post
title: JavaScript中的Truthy和Falsy介绍
date: 2013-02-03 16:19:47
tags: JavaScript
categories: js
---

> JavaScript中存在boolean类型，以供逻辑判断使用。不过，和很多其它编程语言不一样的是，JavaScript中存在Truthy值和Falsy值的概念 — 除了boolean值true、false外，所有类型的JavaScript值均可用于逻辑判断
<!-- more -->

1.Falsy值，当进行逻辑判断时均为false(如!!false==false)。六个Falsy值：false、undefined、null、正负0、NaN、""(空串)。

2.其余所有的值均为Truthy，当进行逻辑判断时均为true（如!![]==true）。Infinity、空数组、”0″都是Truthy值。
```javascript
var a = !!(0); // a的值为false
var b = !!("0"); // b的值为true
```
### 关于falsy值之间的比较，分为以下几种情况
1.false、0、空串三者是可以互等的，如下所示：
```javascript
var c = (false == 0); // true
var d = (false == ""); // true
var e = (0 == ""); // true
```
2.null和undefined可以互等，但是不与其他几种相等，如下：
```javascript
var f = (null == false); // false
var g = (null == null); // true
var h = (undefined == undefined); // true
var i = (undefined == null); // true
```
3.最后一个比较特别的，NaN，不与其他任何的相等，甚至与自己都不等
```javascript
var j = (NaN == null); // false
var k = (NaN == NaN); // false
```
javascript使用typeof(NaN),返回值是number，也就是说这个NaN还是个number类型。还好js提供了一个函数inNaN()用来判断一个变量是否是数字。

4.空数组，例如var a = [];是返回true的，但也得看你怎么用，区别如下：
```javascript
if ( [] ) {
  // 这里的代码将会执行
}

if ( [] == true ) {
  // 这里的代码不会执行
}

if ( [] == false ) {
  // 这里的代码将会执行
}
```
truthy和true还是不一样的，隐含有true属性的变量不可以认为它是true，它不是boolean类型！

转载2个有趣的例子:
一，[] == ![] //true
> 解析：
1.等号右边有 ! ，优先级比 == 更高，优先计算右边的结果。 [] 为非假值，所以右边的运算结果为 false。
![] ==> false
2.== 的任意一边有 boolean 类型的值时先把这个值转换成 number 类型，右边转换成了 0。
Number(false) ==> 0
3.== 的两边分别是 number 和 object 类型的值时，把 object 转换成 number 类型，需要对 object 进行 ToNumber 操作。
Number([].valueOf()) ==> 0

二，++[[]][+[]]+[+[]]//"10"
> 解析：
1.++[[]][+[]]+[+[]]==>
++[[]][+[]]
+
[+[]]
2.因为+[] === 0,所以原式==>
++[[]][0]
+
[0]
3.因为 [[]][0] 的意思是：获取 [[]] 的第一个元素,返回[[]]的第一个数组[]，原式==>
1
+
[0]
4.当数组只有一个元素时，返回结果就是它自身的第一个元素，原式==>
1+"0"==>"10"//字符串