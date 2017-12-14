layout: post
title: Array迭代方法
date: 2012-06-26 21:37:33
categories: js
---
数组主要有5个迭代方法，每个都是接收两个参数：在每一项上运行的函数和运行该函数的作用域对象--影响this的值。
<!-- more -->
### every()：对数组中每项运行给定函数，如果每项都返回true；则返回true。
```javascript
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
```
**注意：**every() 不会对空数组进行检测。
**注意：**every() 不会改变原始数组。
### some()：对数组每项运行给定函数，有一项返回true，则返回true。
```javascript
var arr = [1,3,4,6,3,2];
var everyarr = arr.every(function(item,index,array){
	return (item > 3);
});
console.log(everyarr);

var somearr = arr.some(function(item,index,array){
	return (item >3);
});
console.log(somearr);
```
### forEach()：对每项运行给定函数。
```javascript
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// 注意索引2被跳过了，因为在数组的这个位置没有项
[2, 5, ,9].forEach(logArrayElements);
```
### map()：对每项运行给定函数，返回每项调用的结果组成的数组。
```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
//翻转字符串
var str = '12345';
Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join('');
```
### filter()：对数组中每项运行给定函数，返回该函数返回true的项组成的函数。
```javascript
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
```
**注意：**filter 不会改变原数组。
