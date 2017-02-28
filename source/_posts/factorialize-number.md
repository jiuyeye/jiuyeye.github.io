---
title: 算法-整数的阶乘
date: 2012-05-11 18:19:40
tags: 算法
categories: js
---
如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。

<!-- more -->

### 计算一个整数的阶乘

阶乘通常简写成 n!

例如: 5! = 1 * 2 * 3 * 4 * 5 = 120
```javascript
//方案一：利用while循环
function factorialize(num) {
  var result = 1;
  while(num){
    result *= num;
    num--;
  }
  return result;
}
//方案二：利用函数递归
function factorialize(num){
    if(num <= 0){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
factorialize(5);
```

相关知识：
[算术运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)