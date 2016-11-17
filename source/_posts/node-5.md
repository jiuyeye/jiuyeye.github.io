layout: post
title: node学习第五天
date: 2014-10-05 21:30:20
tags: node
categories: js
---

Express是一个Node.js的、轻量级的web框架。

<!-- more -->

### Express的使用

1. 安装，和其他模块一样

```javascript
npm install -g express-generator //需先安装express-generator 
npm install -g express 

express express_example //express的默认模版采用jade，若需要ejs模版支持，加上-e选项
express -e express_example

```

2. 运行项目
```javascript
npm install

npm start  

> express-jade@0.0.0 start D:\work\node\express_jade
> node ./bin/www

```

3. 访问express项目

浏览器中输入http://localhost:3000/

### Express的目录结构

`app.js` 用来启动应程序的配置信息；
`node_modules` 安装的node模块；
`views`  视图文件；
`routes`  路由，定义应用程序相应的页面；
`public`  公共文件，js、css、img等；
`package.json` 不多说了。

### jade模板引擎
views下的文件，可以看到.jade为扩展名的文件。express用jade来编译成html
Jade是基于缩进的，类似于sass。缩进很重要，定义了文档的层次。
```javascript
.warpper
  h1 文章题目
  p 文章介绍
  article 文章内容
```
编译后
```html
<div class="warpper">
  <h1>文章题目</h1>
  <p> 文章介绍</p>
  <article> 文章内容</article>
</div>
```
[更多Jade语法](https://segmentfault.com/a/1190000000357534)

### ejs模板

```javascript
var ejs = require(''),
    str = require('fs').readFileSync(__dirname + '/list.ejs', 'utf8');  
  
var ret = ejs.render(str, {  
  names: ['foo', 'bar', 'baz']  
});  
  
console.log(ret); 
```
模板
```html
<% if (names.length) { %>  
  <ul>  
    <% names.forEach(function(name){ %>  
      <li foo='<%= name + "'" %>'><%= name %></li>  
    <% }) %>  
  </ul>  
<% } %> 
```

 EJS 可以游离于 Express 独立使用的