layout: post
title: js的变量提升和函数提升
date: 2015-02-19 21:11:20
tags: js
categories: [hoisting,scoping]
---
在ES6之前，JavaScript没有块级作用域(一对花括号{}即为一个块级作用域)，只有全局作用域和函数作用域。提升，就是把下面的东西提到上面。
<!-- more -->
### 变量提升
变量提升即将变量声明提升到它所在作用域的最开始的部分。
```javascript
console.log(global); // undefined
var global = 'global';
console.log(global); // global
 
function fn () {
　　console.log(a); // undefined
　　var a = 'aaa';
　　console.log(a); // aaa
}
fn();
```
之所以会是以上的打印结果，是由于js的变量提升，实际上上面的代码是按照以下来执行的：
```javascript
var global; // 变量提升，全局作用域范围内，此时只是声明，并没有赋值
console.log(global); // undefined
global = 'global'; // 此时才赋值
console.log(global); // 打印出global
 
function fn () {
　　var a; // 变量提升，函数作用域范围内
　　console.log(a);
　　a = 'aaa';
　　console.log(a);
}
fn();
```
### 函数提升
js中创建函数有两种方式：函数声明式和函数字面量式。只有函数声明才存在函数提升！如:
```javascript
console.log(f1); // function f1() {}   
console.log(f2); // undefined  
function f1() {}
var f2 = function() {}
```
只所以会有以上的打印结果，是由于js中的函数提升导致代码实际上是按照以下来执行的：

```javascript
function f1() {} // 函数提升，整个代码块提升到文件的最开始
console.log(f1);   
console.log(f2);   
var f2 = function() {}
```
结语：基本上就是这样，要熟练掌握的话可以多做些练习，test:
```javascript
console.log(f1()); 
console.log(f2);   
function f1() {console.log('aa')}
var f2 = function() {}
```

```javascript
(function() {
　　console.log(a);
　　a = 'aaa';
　　var a = 'bbb';
　　console.log(a);
})();
```