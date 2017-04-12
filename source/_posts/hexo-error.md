layout: post
title: 用Hexo搭建静态博客出现spawn ENOENT的解决办法
date: 2016-03-15 22:42:30
tags: hexo
---
<!--more-->
在用Hexo搭建静态博客的时候，deploy时出现如下错误：

``` bash
Error: spawn ENOENT
    at errnoException (child_process.js:980:11)
    at Process.ChildProcess._handle.onexit (child_process.js:771:34)
```

原因是：
在cmd中敲命令导致无法上传github，改为在git bash中deploy 后正常。因为可能当初装git时只使用 git bash，导致cmd中无法使用git命令。
