layout: post
title: react学习-第一天
date: 2016-10-01 19:36:19
tags: react
categories: js
---

react是什么？
> 官网：用于开发数据不断变化的大型应用程序（Building large applications with data that changes over time）。

<!-- more -->

1. React不是一个完整的MVC框架，最多可以认为是MVC中的V（View），甚至React并不非常认可MVC开发模式；
2. React的服务器端Render能力只能算是一个锦上添花的功能，并不是其核心出发点，事实上React官方站点几乎没有提及其在服务器端的应用；
3. 有人拿React和Web Component相提并论，但两者并不是完全的竞争关系，你完全可以用React去开发一个真正的Web Component；
4. React不是一个新的模板语言，JSX只是一个表象，没有JSX的React也能工作。

### React的原理
React为此引入了虚拟DOM（Virtual DOM）的机制。基于React进行开发时所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，React都会重新构建整个DOM树，然后React将当前整个DOM树和上一次的DOM树进行对比，得到DOM结构的区别，然后仅仅将需要变化的部分进行实际的浏览器DOM更新。

### 组件化
组件，即封装起来的具有独立功能的UI部件。

React认为一个组件应该具有如下特征：
`可组合（Composeable）`：一个组件易于和其它组件一起使用，或者嵌套在另一个组件内部。如果一个组件内部创建了另一个组件，那么说父组件拥有（own）它创建的子组件，通过这个特性，一个复杂的UI可以拆分成多个简单的UI组件；
`可重用（Reusable）`：每个组件都是具有独立功能的，它可以被使用在多个UI场景；
`可维护（Maintainable）`：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护；

ReactJS官网地址：[http://facebook.github.io/react/](http://facebook.github.io/react/)