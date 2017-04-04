layout: post
title: 数据结构-字典
date: 2014-04-08 21:11:54
tags: 字典
categories: js
---
> 
>字典,存储的是[键，值]对，键名是用来查询特定元素。

<!-- more -->

### 创建字典
```javascript
function Dictionary(){
  var items = {};
  this.set = function(key,value){//添加新元素
    items[key] = value;
  };
  this.remove = function(key){
    if(this.has(key)){
      delete items[key];
      return ture;
    }
    return false;
  };
  this.has = function(){};
  this.get = function(key){
   return this.has(key)? items[key] : undefined;
  };
  this.clear = function(){};
  this.size = function(){};
  this.keys = function(key){
    return key in items;
  };
  this.values = function(){
    var values = {};
    for(var k in items){
      if(this.has(k)){
        values.push(items[k]);
      }
    }
    return values;
  };
  this.getItems = function(){
    return items;
  }
}
```