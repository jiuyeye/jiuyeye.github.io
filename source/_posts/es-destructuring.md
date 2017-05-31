---
title: es6-变量的解构赋值
date: 2016-10-04 14:03:35
tags: es6
categories: js
---
ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值。这种称为解构。

<!-- more -->

```javascript
var [a,b,c]=[1,2,3];
//a =1; b=2; c=3
let [foo,[bar,baz]]=[1,[2,3]];
//foo 1;bar 2;baz 3;
let [,,third]=[1,2,3];
//third 3;
let [x,,y]=[1,2,3];
//x 1;y 3;
let [head,...tail]=[1,2,3,4];
//head 1;tail 4;
let [x,y,...z]=['a'];
//x a;y undefined;z []
```
Set结构，也可以使用数组的解构赋值。
```javascript
var [a,b,c]=new Set([1,2,3]);
//a =1; b=2; c=3
```
### 默认值
### 对象的解构赋值
### 字符串的解构赋值
### 数值和布尔值的解构赋值
### 函数参数的解构赋值
### 圆括号问题
### 用途
```javascript
//1.交换变量
[x,y]=[y,x];
//2.从函数返回多个变量
function example(){
    return[1,2,3];
}
var [a,b,c]=example();
```
