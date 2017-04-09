layout: post
title: 算法-数据分割
date: 2012-05-10 19:39:40
tags: 算法
categories: js
---
### 把一个数组arr按照指定的数组大小size分割成若干个数组块。

```javascript
function chunk(arr, size) {
  var newArr=[];
  for(var i=0;i<arr.length;i+=size){
    newArr.push(arr.slice(i,i+size));
  }
  return newArr;
}

chunk(["a", "b", "c", "d"], 2);
```