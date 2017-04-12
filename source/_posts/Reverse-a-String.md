layout: post
title: 算法-翻转字符串
date: 2012-05-10 14:19:40
tags: 算法
categories: js
---

### 翻转字符串

先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。
```javascript
function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str; //olleh
}

reverseString("hello");
```
相关知识：
`String 全局对象是用来构造字符串对象或字符序列的构造函数。`
`split（）方法通过将字符串分成子字符串，从而将一个String对象拆分为一个字符串数组。`
`Array.reverse() 方法颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个。`
`Array.join() 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中`