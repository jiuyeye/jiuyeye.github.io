layout: post
title: webpack-1
date: 2016-09-21 17:26:13
tags: webpack
categories: 工程化
---

webpack是较火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。
<!-- more -->

> webpack 作为模块化方案，不同于gulp\grunt,后者是一种工具，可以优化工作流程。类似于seajs/requirejs，不同的是预编译模块，而seajs/requirejs是在线编译。

### webpack 的优势

1. webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。
```javascript
//以 AMD/CMD 模式来说，鉴于模块是异步加载的，所以常规需要使用 define 函数来回调：
define(['package/lib'], function(lib){
    function foo(){
        lib.log('hello world!');
    }
    return {
        foo: foo
    };
});
```
```javascript
//为了可以兼容 commonJS 的写法，也可以将 define 这么写：
define(function (require, exports, module){
    var someModule = require("someModule");
    var anotherModule = require("anotherModule");

    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();

    exports.asplode = function (){
        someModule.doTehAwesome();
        anotherModule.doMoarAwesome();
    };
});
```
```javascript
//对 webpack 来说，我们可以直接在上面书写 commonJS 形式的语法，无须任何 define （毕竟最终模块都打包在一起，webpack 也会最终自动加上自己的加载器）：
var someModule = require("someModule");
var anotherModule = require("anotherModule");

    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();

    exports.asplode = function (){
        someModule.doTehAwesome();
        anotherModule.doMoarAwesome();
 };
```
2. 能被模块化的不仅仅是 JS 了。
3. 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等。
4. 扩展性强，插件机制完善。

> 安装

```javascript
npm install webpack -g
npm install webpack --save-dev //依赖写入package.json
```


> 配置（每个项目下都必须配置有一个`webpack.config.js`，它的作用如同常规的`gulpfile.js`/`Gruntfile.js`）

webpack.config.js实例
```javascript
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/page/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};
```

⑴ plugins 是插件项，这里我们使用了一个 CommonsChunkPlugin 的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
⑵ entry 是页面入口文件配置，output 是对应输出项配置（即入口文件最终要生成什么名字的文件、存放到哪里），其语法大致为：
```javascript
{
    entry: {
        page1: "./page1",
        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
        page2: ["./entry1", "./entry2"]
    },
    output: {
        path: "dist/js/page",
        filename: "[name].bundle.js"
    }
}
```
⑶ module.loaders 是最关键的一块配置。它告知 webpack 每一种文件都需要使用什么加载器来处理：
```javascript
module: {
    //加载器配置
    loaders: [
        //.css 文件使用 style-loader 和 css-loader 来处理
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        //.js 文件使用 jsx-loader 来编译处理
        { test: /\.js$/, loader: 'jsx-loader?harmony' },
        //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
        { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
}
```
⑷ 最后是 resolve 配置

> 运行 webpack

```javascript
webpack --display-error-details
```
主要参数

| 参数      | 说明     |
| :------------- |:-----------|
| webpack --display-error-details | 出错时能查阅更详尽的信息 |
| webpack --config XXX.js | 使用另一份配置文件（比如webpack.config2.js）来打包 |
| webpack -p | 压缩混淆脚本，这个非常非常重要！ |
| webpack -d | 生成map映射文件，告知哪些模块被最终打包到哪里了 |