layout: post
title: 数据结构-栈
date: 2014-04-03 17:37:07
tags: 栈
categories: js
---
> 栈是一种遵从后进先出(LIFO)原则的有序集合。新添加的或待删除的元素都保存在栈的末尾，称作栈顶。另一端叫栈底。

<!-- more -->

### 创建栈

```javascript
function Stack(){//创建栈
  //各种属性和方法
  var items = [];
  this.push = function(element){
  	items.push(element);
  };
  this.pop = function(){
  	items.pop();
  };
  this.peek = function(){
  	return items[items.length-1];
  };
  this.isEmpty = function(){
  	return items.length == 0;
  };
  this.size = function(){
  	return items.length;
  };
  this.clear = function(){
  	items=[];
  };
  this.print = function(){
  	console.log(items.toString());
  };
}
```
### 十进制转二进制
```javascript
function divideBy2(decNumber){
  var remStack=new Stack(),
  rem,
  binaryString='';
  while(decNumber>0){
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/2);
  }
  while(!remStack.isEmpty()){
    binaryString += remStack.pop().tostring();
  }
  return binaryString;
}
```