layout: post
title: 数据结构-树
date: 2014-04-09 18:03:57
tags: 
categories: js
---
> 树是一种分层数据的抽象模型；一个树包含一系列存在父子关系的节点，位于树顶部的节点叫做根节点，至少有一个子节点的节点称为内部节点，没有子元素的节点称为外部节点。

<!-- more -->

### 二叉树

1. 二叉树，节点最多只能有两个节点，一个是左侧子节点，一个是右侧子节点。
2. 二叉搜索树，只允许在左侧节点存储小的值，在右侧节点存储大的值。

```javascript
function BinarySearchTree(){
  var Node = function(key){
    this.key=key;
    this.left=null;
    this.right=null;
  }
  var root=null;

  this.insert = function(key){//插入一个键
    var newNode = new Node(key);
    if(root ===null){
      root = newNode;
    }else{
      insertNode(root.newNode);
    }
  }

  var insertNode = function(node,newNode){
    if(newNode.key<node.key){
      if(node.left ===null){
      	node.left = newNode;
      }else{
      	insertNode(node.left,newNode);
      }
    }else{
      if(node.right ===null){
      	node.right = newNode;
      }else{
      	insertNode(node.right,newNode);
      }
    }
  }
}
```

### 树的遍历