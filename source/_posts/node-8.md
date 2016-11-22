layout: post
title: node学习第8天
date: 2014-10-08 22:16:06
tags: node
categories: js
---

调试Node.js应用程序

<!-- more -->
> 程序避免不了各种各样的bug，有bug就需要调试。nodejs下面可以通过STDIO、调试器、inspector进行调试。

### STDIO模块
STDIO是Node.js核心模块，提供基本的输出功能，是一种轻量级的方法。不需要依赖其他模块，遵循使用控制台对象在浏览器中调试JavaScript的惯例。就像我们经常用到的`console`。  


`console.log([format],...)` 向控制台输出日志，可以有多个参数，格式有%s,%d,%j(json格式)
`console.info() `
`console.err() `
`console.warn()`
`console.dir(object)`       利用util.inspect()输出对象的分析
`console.time(tag)` 
`console.timeEnd(tag)`  配合time() 生成一个测时器，并输出其间隔的时间
`console.assert(expr,msg)`  若expr为假，则输出msg
`console.trace(tag)`            输出当前的栈信息