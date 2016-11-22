layout: post
title: node学习第7天
date: 2014-10-07 17:10:32
tags: node
categories: js
---

数据的的读取、写入、存储。

<!-- more -->

十一的假期很快结束了，也算是对node入个门了。

> 应用了存在各种对数据持久化的需求。比如购物车、用户信息、订单等。如何保持数据的持久化，数据的的读取、写入、存储是必不可少的。 

### 将数据写入文件
```javascript
var fs = require('fs'),
	data = "some data";
fs.writeFile('file.txt',data,function(err){//如果file不存在，writeFile创建文件；
	if(!err){
		console.log('to file.txt');
	} else {
		throw err;
	}
})
```
### 读取文件
```javascript
var fs = require('fs'),
	data = "some data";
fs.readFile('file.txt','utf8',function(data,err){//如果file不存在，writeFile创建文件；
	if(!err){
		console.log(data);
	} else {
		throw err;
	}
})
```
### 数据库
小块信息可以在txt存储，数据量不断增加的时候，就需要数据库得支持。数据库有关系型数据库、还有近几年比较流行的NoSQL数据库。
关系型数据库：mysql、sqlserver等；
NoSQL：Redis、Hadoop、MongoDB等。
nodejs对主流数据库都可以支持；可以在npm找找到链接数据库的库文件。

MongoDB是nodejs社区一种流行选择，是面向文档的数据库。
1.[MongoDB的安装](https://jiuyeye.github.io/2014/09/11/mongodb-setup/)；
2.链接MongoDB；