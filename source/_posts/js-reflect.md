---
title: JavaScript中的Reflect对象详解
date: 2016-11-06 18:04:07
tags: es6
categories: js
---
Reflect 是一个内置的对象，它提供可拦截JavaScript操作的方法。方法与代理处理程序的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。
与大多数全局对象不同，Reflect没有构造函数。您不能将其与一个new运算符一起使用，或者将Reflect对象作为一个函数来调用。
<!-- more -->
### 什么要使用Reflect

1：更加有用的返回值：Reflect有一些方法和ES5中Object方法一样样的， 比如： Reflect.getOwnPropertyDescriptor和Reflect.defineProperty, 不过, Object.defineProperty(obj, name, desc)执行成功会返回obj， 以及其它原因导致的错误， Reflect.defineProperty只会返回false或者true来表示对象的属性是否设置上了， 如下代码可以重构：
```javascript
try {
  Object.defineProperty(obj, name, desc);
  // property defined successfully
} catch (e) {
  // possible failure (and might accidentally catch the wrong exception)
}

//重构
if (Reflect.defineProperty(obj, name, desc)) {
  // success
} else {
  // failure
}
```
其余的方法， 比如Relect.set ， Reflect.deleteProperty, Reflect.preventExtensions, Reflect.setPrototypeOf， 都可以进行重构；

2：函数操作， 如果要判断一个obj有定义或者继承了属性name， 在ES5中这样判断：name in obj ；
或者删除一个属性 ：delete obj[name], 虽然这些很好用， 很简短， 很明确， 但是要使用的时候也要封装成一个类；
有了Reflect， 它帮你封装好了， Reflect.has(obj, name), Reflect.deleteProperty(obj, name);

3：更加可靠的函数式执行方式： 在ES中， 要执行一个函数f，并给它传一组参数args， 还要绑定this的话， 要这么写：
```javascript
f.apply(obj, args)

//但是f的apply可能被重新定义成用户自己的apply了，所以还是这样写比较靠谱：
Function.prototype.apply.call(f, obj, args)

//上面这段代码太长了， 而且不好懂， 有了Reflect， 我们可以更短更简洁明了：
Reflect.apply(f, obj, args)

```

4：可变参数形式的构造函数： 想象一下， 你想通过不确定长度的参数实例化一个构造函数， 在ES5中， 我们可以使用扩展符号， 可以这么写：
```javascript
var obj = new F(...args)
//ES5中能够这么写：
var obj = Reflect.construct(F, args)
```

5：控制访问器或者读取器的this： 在ES5中， 想要读取一个元素的属性或者设置属性要这样：
```javascript
var name = ... // get property name as a string
obj[name] // generic property lookup
obj[name] = value // generic property

//updateReflect.get和Reflect.set方法允许我们做同样的事情

var name = ... // get property name as a string
Reflect.get(obj, name, wrapper) // if obj[name] is an accessor, it gets run with `this === wrapper`
Reflect.set(obj, name, value, wrapper)访问器中不想使用自己的方法，而是想要重定向this到wrapper：
var obj = {
  set foo(value) { return this.bar(); },
  bar: function() {
    alert(1);
  }
};
var wrapper = {
  bar : function() {
    console.log("wrapper");
  }
}
Reflect.set(obj, "foo", "value", wrapper);
```

6：避免直接访问 __proto__ ：

ES5提供了 Object.getPrototypeOf(obj)，去访问对象的原型， ES6提供也提供了
Reflect.getPrototypeOf(obj) 和 Reflect.setPrototypeOf(obj, newProto)， 这个是新的方法去访问和设置对象的原型：
Reflect.apply的使用
Reflect.apply其实就是ES5中的 Function.prototype.apply() 替身， 执行Reflect.apply需要三个参数
第一个参数为： 需要执行的函数；
第二个参数为： 需要执行函数的上下文this；
第三个参数为： 是一个数组或者伪数组， 会作为执行函数的参数；