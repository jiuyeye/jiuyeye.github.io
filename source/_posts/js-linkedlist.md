layout: post
title: 数据结构-链表
date: 2014-04-05 15:51:09
tags: linkedlist
categories: js
---
>链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的，每个元素由一个存储元素本身的节点和一个指向下一个元素的引用组成。

<!-- more -->

### 创建链表
```javascript
function linkedlist(){
  var Node = function(element){
    this.element = element;
    this.next = null;
  }
  var length = 0;
  var head = null;
  this.append = function(element){//向尾部添加元素
    var node = new Node(element),
    current;
    if(head == null){
      head = nodel
    }else{
      current = head;
      while(current,next){
        current = current.next;
      }
      current.next = node;
    }    
    length++;
  };
  this.insert = function(position,element){//插入元素
    if(position >= 0 && position <= length){
      var node = new Node(element),
      current = head,
      previous,
      index = 0;
      if(position === 0){
        node.next = current;
        head = node;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    }else{
      return false;
    }
  };
  this.removeAt = function(position){//移除元素
    if(position > -1 && position<length){
      var previous,
      current = head,
      index = 0 ;
      if(position === 0){
        head = current.next;
      }else{
        while(index ++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    }else{
      return null;
    }
  };
  this.remove = function(element){
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.indexOf = function(element){
    var current = head,
    index = -1;
    while(current){
      if(element === current.element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };
  this.isEmpty = function(){
    return length === 0;
  };
  this.size = function(){
    return length;
  };
  this.toString = function(element){//把对象转成一个字符串
    var current = head,
    string = '';
    while(current){
      string = current.element;
      current = current.next;
    }
    return string;
  };
  this.getHead = function(){
    return head;
  };
  this.print = function(){
    console.log(items.toString());
  };
}
```