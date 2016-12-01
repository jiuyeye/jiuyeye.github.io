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

#### 6. 逗号用以变量声明的分割或是元素的分割。不在行尾，后面加空格；

#### 7. 分号。表达式结尾添加分号；

### 命名规范

#### 1. 变量命名，小驼峰，第一个单词不大写，其余单词首字母大写；
```javascript
var adminUser = { } ;
```
#### 2. 方法命名，小驼峰命名，尽量采用动词或判断性词汇。
```javascript
var getUser = function () { } ;
User.prototype.getInfo = function () {} ; 
```
#### 3. 类命名，大驼峰。所有字母首字母大写。
```javascript
function UserInfo() {} ; 
```

#### 4. 常量命名。所有字母大写，并用下划线链接。
```javascript
var THEME_COLOR = "#ffffff"
```

#### 5. 文件命名，采用下划线分割单词 jquery_slider.js

### 比较操作
> 无容忍场景，使用=== 代替==。
容忍假值时，可以无需使用===或==，  

```javascript
if (!foo) { //当foo是0，或undefined、null、false、‘’ 时，都会进入；
	//some code
}
```
### 字面量

### 作用域

### 数据与对象

### 异步

### 类和模块

### 注释规范