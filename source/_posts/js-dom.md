layout: post
title: javascript Dom基本操作
date: 2012-04-09 11:47:33
tags: dom
categories: js
---
>javascript Dom基本操作,Dom是一套对文档内容进行抽象和概念化的方法。

<!-- more -->
DOM （文档对象模型）
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。
### 查找元素
```javascript
var dom = document.getElementById('dom');
var nameDom = document.getElementByName('dom');
var tagDom = document.getElementByTagName('dom');
var classDom = document.getElementsByClassName("dom");
```
### 获取节点
```javascript
var attr = document.getElementById('box').getAttribute('id');
```
### 节点操作

> DOM 不单单可以查找节点，也可以创建节点、复制节点、插入节点、删除节点和替换节点。

```javascript
document.write('<p>这是一个段落！</p>')';//输出任意字符串
document.createElement('p');//创建一个元素节点

var box = document.getElementById('box');
var p = document.createElement('p');
box.appendChild(p);//把新元素节点<p>添加子节点末尾

var text = document.createTextNode('段落');//创建一个文本节点
p.appendChild(text);//将文本节点添加到子节点末尾
```
### 属性操作
```javascript
document.getElementById('box').setAttribute('align','center');
document.getElementById('box').removeAttribute('style');
```
### 文本操作
```javascript
var box = document.getElementById('box');
box.innerHTML();//获取
```