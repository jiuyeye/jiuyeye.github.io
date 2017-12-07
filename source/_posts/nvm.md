---
title: Windows 下安装 nvm 管理 nodejs 版本
date: 2017-11-22 22:57:11
tags: nodejs
categories: nvm
---
Node Version Manager（Node版本管理器），用它可以方便的在机器上安装并维护多个Node的版本
<!-- more -->
1.下载地址： [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases "nvm下载");

2.程序安装过程中，在 Set Node.js Symlink 这一步目录设置，
是待会 nvm use 存放你的 nodejs 程序的目录 [C:\\nodejs]。

```javascript
nvm -v // 查看版本 Running version 1.1.6.
nvm install latest // 下载最新的 node 版本 v9.2.0
nvm install 8.4.4 // 安装不同版本
nvm install 6.2.0 32 // 默认是64位，32位需指定
nvm uninstall 6.2.0 #卸载对应的版本

nvm list // 查看已安装的 node 版本
  * 9.2.0 (Currently using 64-bit executable)
    6.0.0

nvm use [9.2.0]://使用特定版本的node，需本地已经安装。
```

配置node的下载路径
在nvm的安装路径下，找到settings.txt打开，在后面加加上

```javascript
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/

```