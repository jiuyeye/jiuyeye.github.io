---
title: JavaScript 异步编程
date: 2015-05-01 18:10:12
tags: asyn
categories: js
---
JavaScript 中的异步编程概念、由来，以及和同步编程的区别。

<!-- more -->
> JavaScript中执行任务的模式有两种：同步和异步；

### 同步和异步的区别
1. 同步：后一个任务等前一个任务执行完再执行；程序的执行顺序与任务的排列顺序一致、同步的。
同步加载的网络timeline是瀑布模型，异步加载的网络timeline是并发模型。
2. 异步：提交后继续执行后面的代码，而在后台继续监听，服务器响应后有程序作响应处理，异步的好处是不必等服务器的响应可以在客户端继续做其他事。

### 异步编程的方法
1. 回调函数：异步编程最基本的方法
```javascript
function asyFun1(num){
    console.log("回调函数方法");
    console.log(num + 1);
}
function asyFun2(arr,callback){
    var total = arr.reduce(function(a,b,index,arr){
        return a+b;
    });
    callback && callback(total);
}
asyFun2([1,2,3,4,5],asyFun1);
```
2. 事件监听
3. 发布订阅
4. Promise