---
title: js预解析
date: 2013-01-04 19:18:13
categories: js
---
JavaScript是解释型语言，但又不是在运行时自上往下一句一句地解析。
<!-- more -->
先来几个例子
```javascript
console.log(a);
var a=1;
console.log(a);
function a(){console.log(2);}
var a=3;
console.log(a);
function a(){console.log(4);}
console.log(a);
a();
```
### 变量和函数在内存中的展示
```javascript
var a;                 // 首先提前`变量`当前值 为：undefind。
function a(){
    return false;
};                     // 遇到函数 提前函数 注意：当前函数命 和 上面的变量名 一样 竟然一样怎么办呢？
                    // 不要急 js解析器已经做了处理 同名的函数会替换掉 同名的 变量 现在就只剩下 a 函数块 自己了。


alert(a);              // 因为 上面 只剩下 a 函数了 所以现在就弹出 a函数的整个函数块。
a = 1;                 // a = 1 表达式赋值 所以就又把 a 函数给替换成了 变量 值为：1。
alert(a);              // 现在 弹出 的值就是被改变过的 a 值为 1；
function a(){          // 这个函数现在就没用了。
    return false;
};
```
### 预解析
>预解析就是：在当前作用域中，JavaScript代码执行之前，浏览器首先会默认的把所有带var和function声明的变量进行提前的声明或者定义。

js解析器在运行js代码的时候 分为两步：
1. 第一步 把所有的 变量、函数、参数 提前到当前作用域的顶部。
2. 第二步 逐行解读代码 从左到右、从上至下。

#### var声明的变量和function声明的函数在预解析的区别
var声明的变量和function声明的函数在预解析的时候有区别，var声明的变量在预解析的时候只是提前的声明，function声明的函数在预解析的时候会提前声明并且会同时定义。也就是说var声明的变量和function声明的函数的区别是在声明的同时有没同时进行定义。