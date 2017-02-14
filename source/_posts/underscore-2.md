---
title: underscore 学习3
date: 2015-12-09 19:28:14
tags: underscore
categories: js
---
> Underscore.js定义了一个下划线（_）对象，函数库的所有方法都属于这个对象。这些方法大致上可以分成：集合（collection）、数组（array）、函数（function）、对象（object）和工具（utility）五大类。

<!-- more -->

### underscore安装
```javascript
npm install underscore
```
### 集合相关方法
map方法对集合的每个成员依次进行某种操作，将返回的值依次存入一个新的数组。
```javascript
_.map([1, 2, 3], function(num){ return num * 3; });
// [3, 6, 9]
_.map({one : 1, two : 2, three : 3}, function(num, key){ return num * 3; });
// [3, 6, 9]
```
each方法与map类似，依次对数组所有元素进行某种操作，不返回任何值。
```javascript
_.each([1, 2, 3], alert);
_.each({one : 1, two : 2, three : 3}, alert);
```
reduce方法依次对集合的每个成员进行某种操作，然后将操作结果累计在某一个初始值之上，全部操作结束之后，返回累计的值。该方法接受三个参数。第一个参数是被处理的集合，第二个参数是对每个成员进行操作的函数，第三个参数是累计用的变量。
```javascript
_.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// 6
// reduce方法的第二个参数是操作函数，它本身又接受两个参数，第一个是累计用的变量，第二个是集合每个成员的值。
```
shuffle方法返回一个打乱次序的集合。
```javascript
_.shuffle([1, 2, 3, 4, 5, 6]);
// [4, 1, 6, 3, 5, 2]
```