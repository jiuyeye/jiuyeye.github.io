---
title: ES-函数的扩展
date: 2016-10-18 20:21:03
tags: es6
categories: js
---
### 函数参数的默认值

```javascript
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World

//ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```
使用参数默认值时，函数不能有同名参数。

### 与解构赋值默认值结合使用