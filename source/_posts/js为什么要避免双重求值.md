layout: post
title: js为什么要避免双重求值
date: 2013-01-12 23:36:50
tags: js
---

js 动态执行包含代码的字符串，有四种标准方法：evaluation()、Function()、构造函数、setTimeout()和setInterval()，但是都会导致双重求值得性能消耗。

<!-- more -->

```javascript

	var a = 1,b = 2;
	
	//eval()执行代码字符串；
	result = eval("a + b");

	//Function() 执行代码字符串
	sum = new Function("a","b","retrun a + b");

	//setTimeout()
	setTimeout("sum = a + b",100);

	//setInterval()
	setInerval("sum = a + b",100);

```

js 动态执行包含代码的字符串，有四种标准方法：evaluation()、Function()、构造函数、setTimeout()和setInterval()，但是都会导致双重求值得性能消耗。