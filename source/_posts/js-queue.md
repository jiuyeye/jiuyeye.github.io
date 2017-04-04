layout: post
title: 数据结构-队列
date: 2014-04-03 19:24:41
tags: queue
categories: js
---
>队列遵循FIFO(First in First out，先进先出)原则的一组有序的项，在尾部添加新元素，从顶部移除元素。最新添加的元素必须排在队列的末尾。

<!-- more -->

### 创建对列
```javascript
function Queue(element){
  var items = [];
  this.enqueue = function(element){//在队列尾部添加新元素；
    items.push(element);
  }
  this.dequeue = function(){//移除队列第一项；
    renturn items.shift();
  }
  this.front = function(){//返回队列第一项；
    renturn items[0];
  }
  this.isEmpty = function(){；
    renturn items.length==0;
  }
  this.size = function(){；
    renturn items.length;
  }
  this.print = function(){；
    console.log(items.toString());
  }
}

```
### 优先队列

```javascript
function PriorityQueue(){
  var items = [];
  function QueueElement(element,priority){
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function(element,priority){
    var queueElement = new QueueElement(element,priority);
    if(this.isEmpty()){
      items.push(queueElement);
    }else{
      var added = false;
      for (var i=0;i<items.lenght;i++){
        if(queueElement.priority < items[i].priority){
          items.splice(i,0,queueElement);
          added = true;
          break;
        }
      }
      if(!added){
        items.push(queueElement);
      }
    }
  }
}
```

### 循环队列-击鼓传花

```javascript
function hotPotato(nameList,num){
	var queue = new Queue();
	for (var i=0;i<nameList.length;i++){
	  queue.enqueue(nameList[i]);
	}
	var eliminated = '';
	while (queue.size()>1){
      for(var i=0;i<num;i++){
        queue.enqueue(queue.dequeue());
      }
      eliminated=queue.enqueue();
      console.log(eliminated+'在击鼓传花游戏中被淘汰');
    }
    return queue.dequeue();
}
var names = ['John','Jack','Carl'];
var winner = hotPotato(names,7);
console.log(winner+'胜出');
```