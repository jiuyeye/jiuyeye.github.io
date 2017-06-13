layout: post
title: es6-Class 的基本语法
date: 2016-10-07 22:14:08
tags: es6
categories: js
---
ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
<!-- more -->
```javascript
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。也就是说，ES5 的构造函数Point，对应 ES6 的Point类的构造方法。

Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。
```javascript
class Point {
  constructor() {}

  toString() {}

  toValue() {}
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```
类的属性名，可以采用表达式。
```javascript
let methodName = 'getArea';

class Square {
  constructor(length) {}

  [methodName]() {
    // ...
  }
}
```

### 严格模式

类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。

考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。

### constructor 方法

constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
```javascript
class Point {}

// 等同于
class Point {
  constructor() {}
}
```
类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

### 类的实例对象

### Class 表达式
```javascript
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
```

### 不存在变量提升

### 私有方法

### 私有属性

### this 的指向

### name 属性
```javascript
class Point {}
Point.name // "Point"
```
name属性总是返回紧跟在class关键字后面的类名。

### Class 的取值函数（getter）和存值函数（setter）
```javascript
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```

### Class 的 Generator 方法
```javascript
class Foo {
  constructor(...args) {
    this.args = args;
  }
  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}

for (let x of new Foo('hello', 'world')) {
  console.log(x);
}
// hello
// world
```

### Class 的静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
```javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```
### Class 的静态属性和实例属性