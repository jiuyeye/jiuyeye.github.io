layout: post
title: ES6中快捷语法
date: 2017-03-26 22:44:18
tags: es6
categories: js
---
<!-- more -->
### 三元运算符
```javascript
//传统写法
const x = 20;
let answer;
if (x > 10) {
 answer = 'is greater';
} else {
 answer = 'is lesser';
}
//快捷语法
const answer = x > 10 ? 'is greater' : 'is lesser';
//也可以嵌套使用
const big = x > 10 ? " greater 10" : x
```
### 空值判定
当需要一个不为空的值时，常常使用很啰嗦的判定，如
```javascript
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
 let variable2 = variable1;
}
//快捷语法
const variable2 = variable1 || 'new';
```
### 变量声明
```javascript
//传统写法
let x;
let y;
let z = 3;
//快捷语法
let x, y, z=3;
```
### 如果 true
```javascript
//传统写法
if (likeJavaScript === true)
//快捷语法
if (likeJavaScript)
```
### for 循环
```javascript
for (let i = 0; i < allImgs.length; i++)
for (let index in allImgs)
```