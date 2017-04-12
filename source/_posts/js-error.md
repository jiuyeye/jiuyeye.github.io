layout: post
title: JavaScript易错知识点整理-转
date: 2016-12-15 15:20:52
tags: js
categories: js
---

主要从变量作用域，类型比较，this指向，函数参数，闭包问题及对象拷贝与赋值这6个方面进行由浅入深的介绍和讲解，其中也涉及了一些ES6的知识点。

<!-- more -->

### 作用域Scoping
> 变量提升，就是把变量提升提到函数的top的地方。

```javascript
//1.-----------------
var v='Hello World';
(function(){
  console.log(v); //Hello Word
})();

//2.-----------------
var v='Hello World';
(function(){
  console.log(v); // v is not defined
  var v='I love you';
})();

//3.-----------------
var v='Hello World';
(function(){
  console.log(v); // Hello World
  v='I love you';
})();

//4.-----------------
var v='Hello World';
(function(){
  var v='I love you';
  console.log(v); // I love you
})();

//5.-----------------
let v='Hello World';
(function(){
  console.log(v); // v is not defined
  let v='I love you';
})();

//6.-----------------
(function(){
  let v='Hello World';
  {
    let v='I love you';
  }
  console.log(v); // Hello World
})();
```
### 函数提升

### 类型比较

### this指向

### 函数参数

### 闭包问题

### 对象拷贝与赋值