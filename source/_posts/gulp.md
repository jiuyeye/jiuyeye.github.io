layout: post
title: gulp学习
date: 2015-06-12 23:14:40
tags: gulp
categories: 工程化
---
gulp是基于Nodejs的自动任务运行器， 她能自动化地完成 javascript/coffee/sass/less/html/image/css/jade/ejs 等文件的的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。在实现上，她借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单。
<!--more-->

## gulp是什么

> Gulp 是一个基于 Node.js 的开源前端工作流构建工具。

1.自动化工具：Gulp 帮助解决开发过程中的流程任务自动化问题；
2.平台无关工具：Gulp 被集成进了大多数的 IDE 中，可以在 PHP, .NET, Node.js, Java 和其他的一些平台上使用 Gulp；
3.构建生态系统：Gulp 拥有完整的插件生态，到目前为止，在 npm.js 上可以搜索`gulp-` ，基于这些插件几乎可以完整所有的前端构建任务。

## gulp 核心思想和特点

1.stream：可以用node和javascript的标准库进行流程控制；
2.code over configuration：g**file.js是code，而不是config；
3.插件：有严格的插件指导策略，确保插件能简单高质的工作；
4.构建：通过流式操作，减少频繁的 IO 操作，更快地构建项目。

## gulp能干什么

1.图片：图片压缩、雪碧图生成；
2.检测：Js\css\html代码检测；
3.编译：Less\sass\jade\ejs编译；
4.Css、html、js、模板、sass；
5.发布；
6.监听；

## gulp命令
|命令     | 说明 |
| :------------- | :-----------|
|gulp.task(name[, deps], fn)  | name：任务名称 deps：依赖任务名称 fn：回调函数 |
|gulp.run(tasks...)  | 尽可能多的并行运行多个task |
|gulp.dest(globs[, options]) | 设置生成文件的路径，流的出口 |
|gulp.watch(globs[, opts][, fn])| 当glob内容发生改变时，执行fn |
|gulp.pipe(dosomething) | 当glob内容发生改变时，执行fn |
|gulp.src(globs[, options]) | gulp.src 方法是流的入口，方法的方法返回的结果为一个 Vinyl files 的 node stream ，可以被 piped 到别的插件中。 |
