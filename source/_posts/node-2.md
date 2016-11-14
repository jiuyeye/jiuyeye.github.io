layout: post
title: node学习第二天
date: 2014-10-02 08:44:30
tags: node
categories: js
---
npm-（Node包管理器）
<!-- more -->
> npm 是node.js的包管理器，类似于Ruby中的Gems、Python中的pip；允许程序员开发在node.js中创建、共享病重用模块。

** 1.安装npm：**
新版里面就包含了npm了，可以直接打npm -v来查看他的版本。

** 2.用npm安装所需模块 **
```JavaScript
npm install <name> [-g] [--save-dev]  //-g 全局安装  --save-dev 本地安装
```
由于npm安装插件是从国外服务器下载，受网络影响大。所以我们可以选择cnpm（国内镜像）。
```shell
npm install cnpm -g --registry=https://registry.npm.taobao.org; 
```

可以到官方 (http://search.npmjs.org) 查找所需模块，
也可以通过终端命令行`npm search <name>`

npm docs <name> 查看文档；
npm bugs <name> 查看模块的bug；
npm edit <name> 阅读模块的源代码；

** 3.package.json 指定依赖关系 **
```JavaScript
npm init //项目下面执行，创建package.json
```
```JavaScript
{
  "name": "test",   //项目名称（必须）
  "version": "1.0.0",   //项目版本（必须）
  "description": "This is for study project !",   //项目描述（必须）
  "homepage": "",   //项目主页
  "repository": {    //项目资源库
    "type": "git",
    "url": "https://git.oschina.net/xxxx"
  },
  "author": {    //项目作者信息
    "name": "lcq",
    "email": "lcq0202@163.com"
  },
  "license": "ISC",    //项目许可协议
  "devDependencies": {    //项目依赖的插件
    "undeerscore": "^1.2.1",
  }
}
```