layout: post
title: 数据结构-集合
date: 2014-04-05 18:56:38
tags: 集合
categories: js
---
>集合是由一组无序且唯一（即不能重复）的项组成。这个数据结构使用了与有限数据集合相同的数学概念。

<!-- more -->
对象中集合的列表用{}表示。

### 创建集合

```javascript
function Set(){
  var items = {};
  this.add= function(element){//添加新项
    if(!this.has(element)){
      items[element]=element;
      return true;
    }
    return false;
  };
  this.remove=fucntion(element){//移除
    if(this.has(element)){
      delete items[element];
      return true;
    }
    return false;
  };
  this.has=fucntion(element){//查找
    return items.hasOwnProperty(element);
  };
  this.clear=fucntion(){//清空
    items = {};
  };
  this.size=fucntion(){//获取length
    return Object.keys(items).length;
  };
  this.values=fucntion(){
    return Object.keys(items);
  };
}
```

### 集合操作

1. 并集

```javascript
  this.union=function(otherSet){
    var unionSet = new Set();
    var values = this.values();
    for(var i=0;i<values.length;i++){
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for(var i=0;i<values.length;i++){
      unionSet.add(values[i]);
    }
  }
```
2. 交集

```javascript
this.intersection=function(otherSet){
  var inersectionSet = new Set();
  var values = this.values();
  for(var i=0;i<values.length;i++){
    if(otherSet.has(values[i])){
      intersectionSet.add(values[i]);
    }
  }
  return intersectionSet;
}
```
3. 差集
```javascript
this.difference = function(otherSet){
  var differenceSet = new Set();
  var values = this.values();
  for(var i=0;i<values.length;i++){
    if(!otherSethas(values[i])){
      differenceSet.add(values[i]);
    }
  }
  return differenceSet;
}
```
4. 子集

```javascript
this.subSet = function(otherSet){
  if(this.size() > otherSet.size()){
    return false;
  }else{
    var values = this.values();
    for(var i=0;i<values.length;i++){
      if(!otherSet.has(values[i])){
        return false;
      }
    }
    return true;
  }
}
```