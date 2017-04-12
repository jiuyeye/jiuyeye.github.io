layout: post
title: 数据结构--树
date: 2014-02-27 22:53:02
tags: 算法
categories: js
---

> 树--非顺序数据结构，对于存储需要快速查找的数据非常有用。常见的有家谱、公司组织结构。

<!-- more -->
一个树结构包含一系列的父子关系的节点。每个节点包含一个父节点(除了顶部的第一个)以及零个多个子节点。
### 二叉树：节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。
1. 二叉搜索树，只允许左侧节点存储(比父节点)小的值，右侧存储(比父节点)大的值。
```javascript
function BinarySearchTree(){
 var Node = function(key){
  this.key = key;
  this.left = left;
  this.right = right;
 }
 //向树中插入一个键
 this.insert = function(key){
  var newNode = new Node(key);
  if(root == null){
   root = newNode;
  }else{
   insertNode(root,newNode);
  }
 }
//插入非根节点的位置；
 var insertNode = function(node,newNode){
  if(newNode.key < node.key){
   if(node.left === null){
    node.left = newNode;
   }else{
    inserNode(node.left,newNode);
   }
  }else{
   if(node.right === null){
    node.right = newNode;
   }else{
    insetNode(node.right,newNode);
   }
  }
 }
 //树的遍历
 var inOrderTraverse = function(callback){
   inOrderTraverseNode(root,callback);
 }
 //中序遍历
 var inOrderTravrseNode = function(node,callback){

 }
 //先序遍历
 var preOrderTravrseNode = function(node,callback){

 }
 //后序遍历
 var postOrderTravrseNode = function(node,callback){

 }
}
```