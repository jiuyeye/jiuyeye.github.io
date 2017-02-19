layout: post
title: ECMAScript学习(一)--基本概念
date: 2012-01-11 21:40:34
tags: JavaScript
categories: js
---
ECMAScript大量借鉴C及其他类C语言的语法。
<!-- more -->
### 语法
1. 区分大小写
js中一切都区分大小写；(函数名可以用Var，不能用var)；
2. 标识符
标识符，就是指变量、函数、属性的名字，或者函数的参数。
<font color="#990000">javascript 不允许在对象字面量中，或用点运算符提取对象属性时，使用保留字作为对象属性名。</font>
3. 注释
单行注释`//`
多行注释`/*   */`
4. 严格模式
`"use strict"`

### 变量
松散型。
```JavaScript
var msg; //未赋值，会保存特殊值undefined；

function test(){
 message="1";//省略var操作符，会创建一个全局变量
}
```

### 数据类型
> 基本数据类型：undefined、null、boolean、number、string；
复杂数据类型：object；

1. typeof操作符
`undefined`--值未定义；
`boolean`--值是布尔值；
`string`--值是字符串；
`number`--值是数值；
`object`--值是对象或null；
`function`--值是函数；
```javaScript
console.log(typeof abc);  //undefined
console.log(typeof true); // boolean
console.log(typeof 1);    //number
console.log(typeof "abc");//string
console.log(typeof null); //object
```
`isFinite()` -- 检测数值是否有穷（是不是位于最大和最小的数值之间）;
