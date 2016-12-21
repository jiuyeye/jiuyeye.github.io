layout: post
title: CommonJS规范
date: 2016-08-11 23:12:23
tags: js
categories: commonjs
---
CommonJS规范的提出，主要是为了弥补当前JavaScript没有标准的缺陷。涵盖了模块、二进制、Buffer、字符集编码、I\O流、进程环境、文件系统、套接字、单元测试、Web服务器网关接口、包管理等。
<!--more-->
> CommonJS对模块的定义十分简单，主要分为模块引用、模块定义和模块标识3个部分。

### 1.模块引用

```JavaScript
var gulp = require("gulp");
```
在CommonJS规范中，存在`require()`方法，这个可以接受模块标识。

### 2.模块定义
在模块中，上下文提供了`require()`方法来引入外部模块。对应引入的功能，上下文提供了`exprots`对象用于导出当前模块的方法或者变量，并且是唯一导出的出口。在模块中，还存在一个`module`对象，代表模块自身，而exprots是module的属性。
```JavaScript
exprots.add = function(){
  var sum = 0,
      i   = 0,
      args= arguments,
      l   = args.length;
  while (i<l){
    sum += args[i++];
  }
  return sum;
}
```

### 3.模块标识