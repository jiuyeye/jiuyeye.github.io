layout: post
title: yarn lock
date: 2016-11-10 23:37:17
tags: yarn
categories: node
---
为了统一安装版本，Yarn需要掌握每个依赖的信息，比package.json更多。Yarn会存储安装过的每个一依赖的安装包。

<!-- more -->
在项目的根目录下有`yarn.lock`文件，会存储依赖的安装版本和安装包
```
gulplog@^1.0.0:
  version "1.0.0"
  resolved "https://registry.yarnpkg.com/gulplog/-/gulplog-1.0.0.tgz#e28c4d45d05ecbbed818363ce8f9c5926229ffe5"
  dependencies:
    glogg "^1.0.0"

has-ansi@^2.0.0:
  version "2.0.0"
  resolved "https://registry.yarnpkg.com/has-ansi/-/has-ansi-2.0.0.tgz#34f5049ce1ecdf2b0649af3ef24e45ed35416d91"
  dependencies:
    ansi-regex "^2.0.0"
```