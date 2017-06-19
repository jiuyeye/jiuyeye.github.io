---
title: ES6-Set和Map数据结构
date: 2016-10-28 22:03:11
tags: es6
categories: js
---
## Set
>Set 本身是一个构造函数，用来生成 Set 数据结构。

```javascript
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
// Set 结构不会添加重复的值
```
Set 函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。
```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
function divs () {
  return [...document.querySelectorAll('div')];
}

const set = new Set(divs());
set.size // 56

// 类似于
divs().forEach(div => set.add(div));
set.size // 56
```

### Set 实例的属性和方法

Set 结构的实例有以下属性。
<code>1.Set.prototype.constructor：构造函数，默认就是Set函数。
2.Set.prototype.size：返回Set实例的成员总数。</code>

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
<code>1.add(value)：添加某个值，返回Set结构本身。
2.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
3.has(value)：返回一个布尔值，表示该值是否为Set的成员。
4.clear()：清除所有成员，没有返回值。</code>

### 遍历操作

Set 结构的实例有四个遍历方法，可以用于遍历成员。
<code>keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员</code>

## WeakSet