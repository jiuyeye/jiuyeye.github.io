---
title: ES-对象的扩展
date: 2016-10-20 15:57:11
tags: es6
categories: js
---

### 属性的简洁表示法

ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
```javascript
var foo = 'bar';
var baz = {foo};
baz // {foo: "bar"}

// 等同于
var baz = {foo: foo};

function f(x, y) {
  return {x, y};
}
// 等同于
function f(x, y) {
  return {x: x, y: y};
}
f(1, 2) // Object {x: 1, y: 2}

//方法简写
var o = {
  method() {
    return "Hello!";
  }
};
// 等同于
var o = {
  method: function() {
    return "Hello!";
  }
};
```

### 属性名表达式
```javascript
// 方法一
obj.foo = true;

// 方法二
obj['a' + 'bc'] = 123;
```

### 方法的 name 属性
函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。
```javascript
const person = {
  sayName() {
    console.log('hello!');
  },
};

person.sayName.name   // "sayName"
```
### Object.is()
ES6提出“Same-value equality”（同值相等）算法，用来解决这个问题。Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
```javascript
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
```
### Object.assign()
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
```javascript
var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```