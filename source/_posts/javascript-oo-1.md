layout: post
title: javascript面向对象
date: 2013-05-01 22:15:34
tags: 面向对象
categories: js
---
面向对象的语言都有一个标志，就是有类的概念，可以通过类创建任意多个具有相同属性和方法的对象。但是ECMAScript没有类的概念。
<!-- more -->

### 什么是对象
1. 一切事物皆对象；
2. 对象具有封装和继承特性；
3. 信息隐藏；

创建自定义对象的最简单方式就是创建一个Object的实例，然后再为她添加属性和方法。
```javascript
var person = new Object();//创建person对象，并添加三个属性一个方法
person.name = "Jack";
person.age = 18;
person.job = "software";
person.sayName = function(){
	console.log(this.name);
}
```
### 属性类型
> ECMAScript中有两种属性：数据属性和访问器属性 

1. 数据属性：
`[[Configurable]]`：表示能否通过delete删除属性从而重新定义，能否修改属性的特性、或者能否把属性修改为访问器属性。默认值：true。
`[[Enumerable]]`：表示能否通过for-in循环返回属性，默认值：true。
`[[Writable]]`：表示能否修改属性的值，默认值：true。
`[[Value]]`：包含这个属性的数据值。默认值：undefined。
```javascript
var person = {};
Object.defineProperty(person,"name",{
	writable:false,
	value:"jack"
});
console.log(person.name);//jack
person.name = "jim";
console.log(person.name);//jack
```
可以多次调用Object.defineProperty()方法修改同一个属性，但在configurable设置为false就会有限制了。

2. 访问器属性：
`[[Configurable]]`：表示能否通过delete删除属性从而重新定义，能否修改属性的特性、或者能否把属性修改为访问器属性。默认值：true。
`[[Enumerable]]`：表示能否通过for-in循环返回属性，默认值：true。
`[[Get]]`：在读取属性时调用的函数，默认值：undefined。
`[[Set]]`：在写入属性时调用的函数。默认值：undefined。

### 定义多个属性
通过Object.defineProperties()方法，可以一次定义多个属性。

### 读取属性的特性
Object.getOwnPropertyDescriptor()方法，可以取得给定属性的描述符。接收两个参数：属性所在的对象和要读取其描述符的属性名称。