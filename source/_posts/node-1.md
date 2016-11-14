layout: post
title: node学习第一天
date: 2014-10-01 08:44:30
tags: node
categories: js
---
Node.js是什么以及安装。。。
<!-- more -->

### Node.Js是什么

2009年Ryan Dahl创建的Node.js。基于V8引擎创建的V8服务器端环境，以事件驱动。

### 能做什么
[+] 多人游戏；
[+] 基于web的聊天客户端；
[+] 将网络中的数据源进行合并的混搭软件；
[+] 单页面浏览器应用；
[+] 基于json的api。

### 安装

直接去http://www.nodejs.org/ 下载对应系统的安装程序。我的win7，直接next就可以了。
安装成功后，可以用node -v来验证。
```javascript
node -v
v 4.2.0
```
这样就可以开始node之旅了。直接cmd中输入node。
```javascript
C:\user\administrator>node
>1+1
2
```
ctrl+c可以退出。

接下来就是helloword 程序了。
代码：
```javascript
var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello Wdddorld\n');
}).listen(3300,"127.0.0.1");
console.log('Server running an http://127.0.0.1:3300/')
```
运行node server.js