layout: post 
title: 排序算法
date: 2014-05-15 19:20:52 
categories: js
---

<!-- more -->

### 创建数组
```javascript
function ArrayList(){
  var array = [];
  this.insert = function(item){
    array.push(item);
  };
  this.toString = function(){
    return array.join();
  };
}
```
### 冒泡排序
```javascript
var swap = function(index1,index2){
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
};
this.bubbleSort = function(){//冒泡算法
  var length = array.length;
  for(var i=0;i<length;i++){
    for(var j=0;j<length-1;j++){
      if(array[j] < array[j+1]){
        swap(j,j+1);
      }
    }
  }
}
this.modifiedBubbleSort = function(){
  var length = array.lenght;
  for(var i=0;i<length;i++){
    for(var j=0;j<length-1-i;j++){
      if(array[j] > array[j+1]){
        sqap(j,j+1);
      }
    }
  }
}
```