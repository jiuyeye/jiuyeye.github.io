---
title: node-querystring
date: 2015-08-10 20:15:00
tags: node
---

"QueryString" 模块用于实现URL参数字符串与参数对象的互相转换

<!-- more -->
> 查询字符串主要由两个方法和内置格式化方法组成，一个是将对象转换为字符串，一个则是相反，将字符串转换为对象

QueryString相关方法
===
```javascript
parse: [Function], //将字符串转成对象,把url上带的参数串转成数组对象
unescapeBuffer: [Function],
unescape: [Function: qsUnescape],
escape: [Function],
encode: [Function],
stringify: [Function],
decode: [Function],
```
1. querystring.parse(str, [sep], [eq], [options])

|接收参数 |  |
| :------------- |:-----------|
|str |欲转换的字符串 |
|sep |设置分隔符，默认为 ‘&' |
|eq |设置赋值符，默认为 ‘=' |
|[options]  maxKeys |可接受字符串的最大长度，默认为1000 |


### QueryString模块和Url模块之间的关系
