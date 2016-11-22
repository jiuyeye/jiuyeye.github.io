layout: post
title: node学习第六天
date: 2014-10-06 16:30:15
tags: node
categories: js
---

Express中的路由

<!-- more -->

### Express 中路由怎么工作的
使用`HTTP`[深入理解HTTP](http://www.360doc.com/content/10/0930/17/3668821_57590979.shtml)来定义路由，并定义请求类型。

##### 添加get路由
```javascript
app.get('/', function(req, res) {//添加get路由，匿名函数，res.rend返回响应。
  res.render('index', { title: 'Express' });
});
```
##### 添加post路由
```javascript
app.post('/', function(req, res) {//添加post路由，匿名函数，res.rend返回响应。
  res.render(req.body);
});
```
##### 在路由中使用参数
```javascript
app.get('/player/:id', function(req, res) {
  res.render(req.params.id);
});
```
##### 路由生成器router
如果使用get或post方法：路由多的时候，很难找到对应的；没有清晰的视图；app.js会很大。

```javascript
var index = require('./routes/index');
app.use('/', index);
```