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
> 回调函数：异步编程最基本的方法

```javascript
function asyFun1(num){
    console.log("回调函数方法");
    console.log(num + 1);
}
function asyFun11(arr,callback){
    var total = arr.reduce(function(a,b,index,arr){
        return a+b;
    });
    callback && callback(total);
}
asyFun11([1,2,3,4,5],asyFun1);
```
* 优点：简单、容易理解和部署；
* 缺点：不利于代码的阅读和维护，各个部分之间高度耦合，流程会很乱，每个任务只能指定一个函数。

> 事件监听：任务的执行不取决代码的顺序，而取决于某个事件的发生。

```javascript
function asyFun2(total){
    console.log("事件监听");
    console.log(total + 1);
}
function asyFun21(arr,callback){
    var total = arr.reduce(function(a,b,index,arr){
        return a+b;
    });
    asyFun21.trigger("done",total);
}
_.extend(asyFun21,Backbone.Events);
asyFun21.on("done",asyFun2);
asyFun21([1,2,3,4,5]);
```
* 优点：容易理解，可以绑定多个事件，每个事件可以指定多个函数，可以在不同的模块中传递数据和时间。
* 缺点：整个程序要变成事件驱动型，运行流程变得不清晰。

> 发布订阅：存在一个“信号中心”，一个任务执行完，就行信号中心发布一个信号，其他任务可以向信号中心订阅这个信号，从而知道自己什么时候开始执行。

```javascript
function asyFun3(total){
    console.log("发布订阅");
    console.log(total + 1);
}
function asyFun31(arr){
    var total = arr.reduce(function(a,b,index,arr){
        return a+b;
    });
    $.publish('done',total);
}
$.subscribe('done',asyFun3);
asyFun31([1,2,3,4,5]);
```

> Promise(CommonJs规范，为异步编程提供统一接口)，简单说，它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。比如，f1的回调函数f2,可以写成：`f1().then(f2)`;
```javascript
function asyFun41(arr){
    var dfd = $.Deferred();
    setTimeout(function () {
　　　var total = arr.reduce(function(a,b,index,arr){
        return a+b;
      });
　　　dfd.resolve(total);
　　}, 1000);
    return dfd;
}
function asyFun42(total){
    console.log("Promise");
    console.log(total + 1);
}
asyFun41([1,2,3,4,5]).then(asyFun42);
```
* 优点:回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。指定多个回调函数：f1().then(f2).then(f3);指定发生错误时的回调函数：f1().then(f2).fail(f3);
* 缺点：理解和编写比较难。

### 异步编程的开源库

1. jquery Deferred
```javascript
function asyFun41(arr){
    var dfd = $.Deferred();
    setTimeout(function () {
　　　var total = arr.reduce(function(a,b,index,arr){
        return a+b;
      });
　　　dfd.resolve(total);
　　}, 1000);
    return dfd;
}
function asyFun42(total){
    console.log("Deferred");
    console.log(total + 1);
}
asyFun41([1,2,3,4,5]).then(asyFun42);
```
2. Queue.js

3. Koa.js
基于nodejs平台的下一代web开发框架。