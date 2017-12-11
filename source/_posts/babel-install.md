---
title: ES6学习之Babel的安装
date: 2016-10-11 21:06:22
tags: [babel,es6]
---
<!-- more -->
### ES6学习之Babel的安装
1. 首先安装babel-cli（用于在终端使用babel）
```javascript
npm install -g babel-cli
```
2. 然后安装babel-preset-es2015(或者使用babel-preset-env)插件
```javascript
npm install --save-dev babel-preset-es2015
```
3. 插件配置
每一次都写上该参数那是很麻烦的，可以在当前目录下新建配置文件 .babelrc。
```javascript
"presets": ['es2015']
```
除了建立.babelrc文件之外，也可在package.json中进行配置，添加以下属性即可：
```javascript
"babel": {
   "presets": ["es2015"]
}
```
4. 终端执行命令
```javascript
babel main.js --presets es2015
```
### Babel常用命令：
1. 转换main.js文件并在当前命名行程序窗口中输出
```javascript
babel main.js
```
2. 将main.js转换后输出到main2.js文件中（使用 -o 或 --out-file ）
```javascript
babel main.js -o main2.js
babel main.js --out-file main2.js
```
3. 实时监控main.js一有变化就重新编译（使用 -w 或 --watch ）
```javascript
babel main.js -w --out-file main2.js
babel main.js -watch --out-file main2.js
```
4. 编译整个src文件夹并输出到lib文件夹中（使用 -d 或 --out-dir ）
```javascript
babel src -d lib
babel src --out-dir lib
```
5. 编译整个src文件夹并输出到一个文件中
```javascript
babel src --out-file main.js
```
6. 直接输入babel-node命令，可以在命令行中直接运行ES6代码
```javascript
babel-node
```
