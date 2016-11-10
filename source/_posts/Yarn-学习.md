layout: post
title: Yarn 学习
date: 2016-11-09 21:30:30
tags: yarn
categories: node
---

Facebook 发布Yarn快一个月了，传说用以要替代 npm 。

<!-- more -->

**1.安装：**

```javascript
npm install -g yarn
```
安装完成后，同node一样用`yarn -V`(要大写)查看版本号.

**2.进入项目**
```javascript
yarn init

yarn init v0.16.1
question name (yarn): yarn
question version (1.0.0):
question description:
question entry point (index.js):
question git repository:
question author:
question license (MIT):
success Saved package.json
Done in 14.52s.
```
一路小跑生成package.json。

**3.添加依赖**
```javascript
yarn add gulp
```

添加完成第一个依赖后`yarn.lock`生成

**4.移除依赖**
```javascript
yarn remove gulp
```
