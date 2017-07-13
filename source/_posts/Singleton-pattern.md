layout: post
title: JavaScript 单列模式学习
date: 2013-10-20 12:03:38
tags: 设计模式
categories: js
---

单例就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。

<!-- more -->

单例模式也称作为单子模式，更多的也叫做单体模式

### 应用场景：
> 对象的构建十分复杂
> 需要依赖具体环境创建不同实例
> 处理大量具有相同属性的小对象

### 思路：
> 一个类能返回一个对象的引用（并且永远是同一个）和一个获得该实例的方法（静态方法，通常使用 getInstance 名称）

### 局限性:
>- 可扩展性差

### 在JavaScript里，实现单例的方式有很多种，其中最简单的一个方式是使用对象字面量的方法，其字面量里可以包含大量的属性和方法：

```javascript

var mySingleton = {
    myname: "jack",
    mysay: function () {
        console.log('hello world');
    }
};

```

扩展该对象，你可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。只暴露你想暴露的public成员和方法，样例代码如下：

```javascript

var mySingleton = function () {

    /* 这里声明私有变量和方法 */
    var privateVariable = 'something private';
    function showPrivate() {
        console.log(privateVariable);
    }

    /* 公有变量和方法（可以访问私有变量和方法） */
    return {
        publicMethod: function () {
            showPrivate();
        },
        publicVar: 'the public can see this!'
    };
};

var single = mySingleton();
single.publicMethod();  // 输出 'something private'
console.log(single.publicVar); // 输出 'the public can see this!'

```
