---
title: JavaScript数组方法学习
date: 2012-05-21 22:37:08
categories: js
---
js中的数组，只是伪数组，拥有类数组特性的对象。把数组的下标转变成字符串，用其作为属性。
<!-- more -->
js中数组比真正数组慢，检索和更新的方式与对象一样。
### array.splice()和array.slice()
array.splice() 影响原来的数组；
array.slice() 不影响原来的数组；