layout: post
title: 数据结构-散列表
date: 2014-04-10 21:49:29
tags: 散列表
categories: js
---
>散列算法

<!-- more -->

### 创建散列表

```javascript
function HashTable(){
  var table = [];
  var loseloseHashCode = function(key){
    var hash = 0;
    for(var i=0;i<key.length;i++){
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
  this.put = function(key,value){//添加新元素
    var position = loseloseHashCode(key);
    console.log(position);
    table[position] = value;
  };
  this.remove = function(key){
    table[loseloseHashCode(key)] = undefined;
  };
  this.get = function(key){
    return table[loseloseHashCode(key)];
  };
}
```

分离链接、线性探查、双散列法