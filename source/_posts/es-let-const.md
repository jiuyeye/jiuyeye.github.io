---
title: ECMA-let和const学习
date: 2016-10-03 18:46:10
tags: [es6,const,let]
categories: js
---
> ES6新增的两个关键词：let和const,es6一共有6种声明变量的方法：var、function、let、const、import、class。

<!-- more -->
### let命令
类似于var，但是只在let所在代码块内有效。
```javascript
{
  var a=1;
  let b=2;
}
a;//1
b;//b is not defined;
```
1. 不存在变量提升
2. 暂时性死区:在代码块内，使用let命令声明变量之前，该变量都是不可用的。
```javascript
var tmp=123;
{
  tmp='abc';//error
  let tmp;
}

//比较隐蔽的‘死区’
function bar(x=y,y=2){
    return[x,y];
}
bar();//报错

function bar(x=2,y=x){
    return[x,y];
}
bar();//[2,2]
```
3. 不允许重复声明

### const命令
const用来声明常量，一旦声明，其值就不能改变。
```javascript
const PI=3.14;//const一旦声明，必须立即初始化。
PI=3;//error:"PI" is read-only
```
```javascript
const foo=[];
foo.prop=123;
foo={};//error:"foo" is read-only;
```
**跨模块常量**
```javascript
//constants.js 模块
exprot const A=1;
exprot const B=2;

//test.js 模块
import * as constans from './constants';
console.log(constans.A)//1

//test2.js 模块
import {A,B} from './constants';
console.log(A)//1
console.log(B)//2
```