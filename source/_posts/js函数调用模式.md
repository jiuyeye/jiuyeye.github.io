---
title: js函数调用模式
date: 2012-03-11 10:23:12
categories: js
---

js 调动模式共有4种：方法调用模式、函数调用模式、构造器调用模式和apply调用模式。

<!-- more -->

> js的函数调用会免费奉送两个而外的参数就是 this 和 arguments 。arguments是参数组，他并不是一个真实的数组，但是可以使用.length方法获得长度。

## 方法调用模式

请注意this此时指向myobject。

```javascript
var myobject={
    value:0,
    inc:function(){
        alert(this.value)
    }
}
myobject.inc()
```
    

## 函数调用模式

请注意this此时指向window

```javascript
var add=function(a,b){
    alert(this)//this被绑顶到window
    return a+b;
}
var sum=add(3,4);
alert(sum)
```

## 构造器调用模式

```javascript
var quo=function(string){
    this.status=string;
}
quo.prototype.get_status=function(){
    return this.status;
}
var qq=new quo("aaa");
alert(qq.get_status());
```

## apply、call调用模式

```javascript
var myobject={};
var sum = function(a,b){
　　return a+b;
};
var sum2 = sum.call(myobject,10,30); //var sum2 = sum.apply(myobject,[10,30]); 
alert(sum2);
```