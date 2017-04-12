layout: post
title: underscore 学习
date: 2015-12-07 10:28:14
tags: underscore
categories: js
---
> Underscore 是一个 JavaScript 工具库，它提供了一整套函数式编程的实用功能，但是没有扩展任何 JavaScript 内置对象。

<!-- more -->

Underscore.js提供了100多个函数，但是没有扩展任何JavaScript内置对象，它为函数式编程提供了很多实用的功能，它提供了关于集合、数组、函数、对象、工具函数等等操作的封装，比如关于对象的就有日期、字符串、数字、数组、元素、函数的验证，还有获取所有的key和值等，关于工具函数就提供了在值范围之间生成随机数、转义HTML字符串和一个经过优化了的获取时间戳函数等。
解决了这个问题：“如果我面对一个空白的 HTML 页面，并希望立即开始工作，我需要什么？” 他弥补了 jQuery 没有实现的功能，同时又是 Backbone 必不可少的部分,它本身与“Backbone”没有半毛钱的关系。 函数包括常用的: map, filter, invoke — 当然还有更多专业的辅助函数,如:函数绑定, JavaScript模板功能,创建快速索引, 强类型相等测试, 等等.

Underscore的类库分为几大类：`Collections`，`Arrays`，`Functions`，`Objects`，`Utility`和`Chaining`。

**Collections**
Collections是集合，指那些由单个元素组成，能够使用下标操作的数据类型的统称，比如Array，Object，String等，从underscore的源码来看，这一类函数只用到最基本的[]运算符和for循环，以及对由此构成的新方法的组合运用。这一类方法有：each、map、reduce、find等。

**Arrays**
Arrays能够使用Array内置的方法，比如slice。underscore的Arrays方法不仅适用于Array类型，也适用于String和Array-like类型的对象。这一类方法有：union、intersection、difference、indexOf等。

**Functions**
underscore中Functions部分提供了一些与Function相关的函数，在javascript里，函数本身也是一种变量类型，函数名只是指向函数对象的引用值，跟其他变量有一样的行为。这一类的函数包括：bind、memorize、debounce、throttle等。

**Objects**
Objects部分最复杂的一个函数是内部用的equal，可能也是整个underscore最复杂的一个，这里最重要的知识点就是javascript的判等，注意引用类型不能直接使用“==”或“===”，需要使用迭代函数转化成原始类型进行比较。underscore的isEqual函数与javascript的完全等同(===)或相等(==)不太一样，更符合人的直觉。

**Utility**
Utility部分根据比较有用的是生成随机数和生成ID，还包括增加自定义函数的mixin，转义html的escape，以及一个简单的html模板函数。

**Chaining**
underscore支持链式调用。通过_.chain(obj) 将变量用underscore包装，然后可以调用所有函数的OO版本，且可以一直“点”下去，类似于_.chain(obj).func1().func2().func3().value()，注意最后要用value获取返回值。
