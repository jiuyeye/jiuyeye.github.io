layout: post
title: ES6实现深度克隆
date: 2016-08-11 23:12:23
categories: js
---
深度克隆就是：把一个对象里面的东西一模一样地复制到另一个对象，并且这两个对象分别放在内存的不同地方。
<!-- more -->
### 通过Object.assigin实现
```javascript
const deepClone=(obj)=>{
   var proto=Object.getPrototypeOf(obj);
   return Object.assign({},Object.create(proto),obj);
}
//通过Object.getPrototypeOf函数得到obj被克隆函数的原型上的属性，然后通过Object.assign实现深度克隆。
```
### 通过proto来实现（仅适合浏览器端）
```javascript
const deepClone=(obj)=>({
  __proto__: Object.getPrototypeOf(obj),
  ...obj
})
```