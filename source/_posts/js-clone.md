layout: post
title: js中的几种克隆方法
date: 2014-08-11 23:12:23
categories: js
---

<!-- more -->
### 克隆对象是基本类型,直接复制
```javascript
var yourName = "jim";
var hisName = yourName;
console.log(hisName);//输出jim
yourName = "abc";
console.log(hisName);//输出jim;
```
### 不是基本类型,不可以直接复制
```
var a=[1,2,3,4];
var b= a;
var c=b;
c.pop();

console.log(a)  //[1,2,3]
console.log(b)  //[1,2,3]
console.log(c)  //[1,2,3]

//遍历数组赋值
var a = [1,2,3,4];
var b = [];
for(var i = 0; i < a.length; i++){
    b.push(a[i])
}
console.log(b)     //[1,2,3,4]
​//数组名.slice（begin，end）从一个数组中截取出新的数组
var arr1 = [1, 2, 3, 4];
var arr2 = arr1.slice(0);
console.log(arr2); //[1,2,3,4]
arr1 = [4, 3, 2, 1];
console.log(arr2); //[1,2,3,4]
//concat方法 拼接数组
var arr1 = [1,2,3,4];
var arr2 = arr1.concat();
    arr2[1] = 9;
    console.log(arr1, arr2); //[1,2,3,4], [1,9,3,4]
```
### 函数的克隆
```javascript
var x = function(){console.log(1);};
var y = x;
y = function(){console.log(2);};
x();  //1
y();  //2
```
### 节点克隆
```javascript
var p = document.getElementsByTagName("p")[0];
var cP = p.cloneNode();//克隆p节点
var cP = p.cloneNode(true);//克隆p节点，深度克隆，克隆节点以及节点下面的子内容。
```
JavaScript中并没有直接提供对象复制(Object Clone)的方法。因此下面的代码中改变对象b的时候，也就改变了对象a。
```javascript
a = {k1:1, k2:2, k3:3};
b = a;
b.k2 = 4;
```
如果只想改变b而保持a不变，就需要对对象a进行复制。

**用jQuery进行对象复制**
在可以使用jQuery的情况下，jQuery自带的extend方法可以用来实现对象的复制。
a = {k1:1, k2:2, k3:3};
b = {};
$.extend(b,a);

**自定义clone()方法来实现对象复制**
下面的方法，是对象复制的基本想法。
```javascript
Object.prototype.clone = function() {
  var copy = (this instanceof Array) ? [] : {};
  for (attr in this) {
    if (!obj.hasOwnProperty(attr)) continue;
    copy[attr] = (typeof this[i] == "object")?obj[attr].clone():obj[attr];
  }
  return copy;
};
a = {k1:1, k2:2, k3:3};
b = a.clone();
```

### 深度复制
```javascript
function clone(obj){
    if(null == obj || "object" != typeof obj) return obj;
    if(obj instanceof Date){
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    if(obj instanceof Array){
        var copy = [];
        for(var i=0,len=obj.length;i<len;i++){
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    if(obj instanceof Object){
        var copy = {};
        for(var attr in obj){
            if(obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
};
```