layout: post
title: node学习第三天
date: 2014-10-03 18:44:30
tags: node
categories: js
---
node中的回调Callback
<!-- more -->

> 回调是指一个函数作为参数传递给另一个函数，并在第一个函数执行完调用。  



```javascript
$('p').show(function(){
	alert('已经展开');
})
```
jquery中经常用到的。

**回调怎么实现的：**
```javascript
function haveCallbackFun(param1,param2,callback){
	console.log('回调的实现');
	alert(param2);
	if(callback && typeof(callback) ==="function"){
		callback();
	}
};
//调用
haveCallbackFun(1,2,function(){
	alert('callback');
});
```
先打印出`回调的实现`,在alert`param2`,最后弹出callback。

**如何控制事情的顺序**
> 回调中加嵌套回调函数