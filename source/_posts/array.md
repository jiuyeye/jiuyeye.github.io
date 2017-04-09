layout: post
title: Array迭代方法
date: 2012-06-26 21:37:33
categories: js
---
数组主要有5个迭代方法，每个都是接收两个参数：在每一项上运行的函数和运行该函数的作用域对象--影响this的值。
<!-- more -->
1. every()：对数组中每项运行给定函数，如果每项都返回true；则返回true。
2. some()：对数组每项运行给定函数，有一项返回true，则返回true。
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
3. forEach()：对每项运行给定函数。
4. map()：对每项运行给定函数，返回每项调用的结果组成的数组。
5. filter()：对数组中每项运行给定函数，返回该函数返回true的项组成的函数。

