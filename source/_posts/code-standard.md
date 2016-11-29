layout: post
title: 编码规范-js
date: 2015-03-29 23:17:20
tags: 规范
categories: js
---
由于JavaScript的灵活性，造成需要程序猿自律才能编写出易读、易维护的代码；编码规范一定程度也是为了约束程序猿，减少低级错误。
<!-- more -->

### 格式和空格
#### 1. 缩进
2个空格，不是tab缩进；
#### 2. 变量声明
采用var声明，不加var会将其变成全局变量，污染上下文；
```javascript
var fs = require("fs");
var gulp = require("gulp");
var http = require("http");
```
```javascript
var fs = require("fs"), gulp = require("gulp"), http = require("http"); //错误示例
```
#### 3. 空格
操作符前后加空格，如：`+`、`-`、`*`、`÷`、`=`等；
```javascript
var sum = 1 + '1';

var sum=1+'1';//错误示例

if (true) {
 //code
}

if(true){//错误示例
 //code
}
```
#### 4. 单双引号
在JavaScript中使用字符串时尽量使用单引号，无需转义双引号；

#### 5. 大括号
无需另起一行
```javascript
if (true) {
 //code
}

if (true)
{  //错误示例
 //code
}
```