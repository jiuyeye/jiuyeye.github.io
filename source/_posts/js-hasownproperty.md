---
title: hasownproperty
date: 2014-11-10 17:53:41
tags: hasownproperty
---
判断一个属性是定义在对象本身而不是继承自原型链，我们需要使用从 Object.prototype 继承而来的 hasOwnProperty 方法。
hasOwnProperty 方法是 Javascript 中唯一一个处理对象属性而不会往上遍历原型链的。

```javascript
Object.prototype.bar = 1;
var foo = {goo: undefined};

foo.bar; // 1
'bar' in foo; // true

foo.hasOwnProperty('bar'); // false
foo.hasOwnProperty('goo'); // true
```

** hasOwnProperty 作为属性 **

Javascript 并未将 hasOwnProperty 设为敏感词，这意味着你可以拥有一个命名为 hasOwnProperty 的属性。这个时候你无法再使用本身的 hasOwnProperty 方法来判断属性，所以你需要使用外部的 hasOwnProperty 方法来进行判断。
```javascript
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); //returns false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// It's also possible to use hasOwnProperty from the Object
// prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```
当判断对象属性存在时，hasOwnProperty 是唯一可以依赖的方法。这里还要提醒下，当我们使用 for in loop 来遍历对象时，使用 hasOwnProperty 将会很好地避免来自原型对象扩展所带来的困扰。