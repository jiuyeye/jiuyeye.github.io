---
title: ES6-async 函数
date: 2016-11-05 22:03:11
tags: es6
categories: js
---
ES2017 标准引入了 async 函数，使得异步操作变得更加方便。async 函数是什么？一句话，它就是 Generator 函数的语法糖。
<!--more-->
```javascript
//Generator 函数，依次读取两个文件
var fs = require('fs');
var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) reject(error);
      resolve(data);
    });
  });
};
var gen = function* () {
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

//async函数,依次读取两个文件
var asyncReadFile = async function () {
  var f1 = await readFile('/etc/fstab');
  var f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```
#### async函数对 Generator 函数的改进，体现在以下四点
1.内置执行器。
2.更好的语义。
3.更广的适用性。
4.返回值是 Promise。
