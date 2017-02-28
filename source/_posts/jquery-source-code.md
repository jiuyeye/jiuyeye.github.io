---
title: jquery源码学习
date: 2013-06-15 19:12:47
tags: jQuery
categories: js
---
jQuery闭包结构、jQuery无new构造、jQuery方法的重载、jQuery的链式调用及回溯、jQuery.fn.extend与jQuery.extend、jQuery正则与细节优化、jQuery变量冲突处理
<!-- more -->

### jQuery 闭包结构

```javascript
(function(window, undefined) {
   // jQuery 代码
})(window);
// 用一个函数域包起来，就是所谓的沙箱
// 在这里边 var 定义的变量，属于这个函数域内的局部变量，避免污染全局
// 把当前沙箱需要的外部变量通过函数参数引入进来
// 只要保证参数对内提供的接口的一致性，你还可以随意替换传进来的这个参数
```
jQuery 具体的实现，都被包含在了一个立即执行函数构造的闭包里面，为了不污染全局作用域，只在后面暴露 $ 和 jQuery 这 2 个变量给外界，尽量的避开变量冲突。常用的还有另一种写法：
```javascript
(function(window) {
   // JS代码
})(window, undefined);
```

### jQuery无new构造
```javascript
// 无 new 构造
$('#test').text('Test');
// 当然也可以使用 new
var test = new $('#test');
test.text('Test');
```
```javascript
(function(window, undefined) {
    var
    // ...
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // 看这里，实例化方法 jQuery() 实际上是调用了其拓展的原型方法 jQuery.fn.init
        return new jQuery.fn.init(selector, context, rootjQuery);
    },

    // jQuery.prototype 即是 jQuery 的原型，挂载在上面的方法，即可让所有生成的 jQuery 对象使用
    jQuery.fn = jQuery.prototype = {
        // 实例化化方法，这个方法可以称作 jQuery 对象构造器
        init: function(selector, context, rootjQuery) {
            // ...
        }
    }
    // 这一句很关键，也很绕
    // jQuery 没有使用 new 运算符将 jQuery 实例化，而是直接调用其函数
    // 要实现这样,那么 jQuery 就要看成一个类，且返回一个正确的实例
    // 且实例还要能正确访问 jQuery 类原型上的属性与方法
    // jQuery 的方式是通过原型传递解决问题，把 jQuery 的原型传递给jQuery.prototype.init.prototype
    // 所以通过这个方法生成的实例 this 所指向的仍然是 jQuery.fn，所以能正确访问 jQuery 类原型上的属性与方法
    jQuery.fn.init.prototype = jQuery.fn;

})(window);
```
1）首先要明确，使用 $('xxx') 这种实例化方式，其内部调用的是 return new jQuery.fn.init(selector, context, rootjQuery) 这一句话，也就是构造实例是交给了 jQuery.fn.init() 方法去完成。
2）将 jQuery.fn.init 的 prototype 属性设置为 jQuery.fn，那么使用 new jQuery.fn.init() 生成的对象的原型对象就是 jQuery.fn ，所以挂载到 jQuery.fn 上面的函数就相当于挂载到 jQuery.fn.init() 生成的 jQuery 对象上，所有使用 new jQuery.fn.init() 生成的对象也能够访问到 jQuery.fn 上的所有原型方法。
3）也就是实例化方法存在这么一个关系链
jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype ;
new jQuery.fn.init() 相当于 new jQuery() ;
jQuery() 返回的是 new jQuery.fn.init()，而 var obj = new jQuery()，所以这 2 者是相当的，所以我们可以无 new 实例化 jQuery 对象。

### jQuery方法的重载
```javascript
// 获取 title 属性的值
$('#id').attr('title');
// 设置 title 属性的值
$('#id').attr('title','jQuery');

// 获取 css 某个属性的值
$('#id').css('width');
// 设置 css 某个属性的值
$('#id').css('width','200px');
```
jQuery 9 种不同的方法重载场景：
```javascript
// 接受一个字符串，其中包含了用于匹配元素集合的 CSS 选择器
jQuery([selector,[context]])
// 传入单个 DOM
jQuery(element)
// 传入 DOM 数组
jQuery(elementArray)
// 传入 JS 对象
jQuery(object)
// 传入 jQuery 对象
jQuery(jQuery object)
// 传入原始 HTML 的字符串来创建 DOM 元素
jQuery(html,[ownerDocument])
jQuery(html,[attributes])
// 传入空参数
jQuery()
// 绑定一个在 DOM 文档载入完成后执行的函数
jQuery(callback)
```

### jQuery.fn.extend 与 jQuery.extend
1）jQuery.extend(object) 为扩展 jQuery 类本身，为类添加新的静态方法；
2）jQuery.fn.extend(object) 给 jQuery 对象添加实例方法，也就是通过这个 extend 添加的新方法，实例化的 jQuery 对象都能使用，因为它是挂载在 jQuery.fn 上的方法（上文有提到，jQuery.fn = jQuery.prototype ）。

### jQuery 的链式调用及回溯
```javascript
// 通过 end() 方法终止在当前链的最新过滤操作，返回上一个对象集合
$('div').eq(0).show().end().eq(1).hide();
```
jQuery 完整的链式调用、增栈、回溯通过 return this 、 return this.pushStack() 、return this.prevObject 实现，`源码`实现：
```javascript
jQuery.fn = jQuery.prototype = {
    // 将一个 DOM 元素集合加入到 jQuery 栈
    // 此方法在 jQuery 的 DOM 操作中被频繁的使用, 如在 parent(), find(), filter() 中
    // pushStack() 方法通过改变一个 jQuery 对象的 prevObject 属性来跟踪链式调用中前一个方法返回的 DOM 结果集合
    // 当我们在链式调用 end() 方法后, 内部就返回当前 jQuery 对象的 prevObject 属性
    pushStack: function(elems) {
        // 构建一个新的jQuery对象，无参的 this.constructor()，只是返回引用this
        // jQuery.merge 把 elems 节点合并到新的 jQuery 对象
        // this.constructor 就是 jQuery 的构造函数 jQuery.fn.init，所以 this.constructor() 返回一个 jQuery 对象
        // 由于 jQuery.merge 函数返回的对象是第二个函数附加到第一个上面，所以 ret 也是一个 jQuery 对象，这里可以解释为什么 pushStack 出入的 DOM 对象也可以用 CSS 方法进行操作
        var ret = jQuery.merge(this.constructor(), elems);

        // 给返回的新 jQuery 对象添加属性 prevObject
        // 所以也就是为什么通过 prevObject 能取到上一个合集的引用了
        ret.prevObject = this;
        ret.context = this.context;

        // Return the newly-formed element set
        return ret;
    },
    // 回溯链式调用的上一个对象
    end: function() {
        // 回溯的关键是返回 prevObject 属性
        // 而 prevObject 属性保存了上一步操作的 jQuery 对象集合
        return this.prevObject || this.constructor(null);
    },
    // 取当前 jQuery 对象的第 i 个
    eq: function(i) {
        // jQuery 对象集合的长度
        var len = this.length,
            j = +i + (i < 0 ? len : 0);

        // 利用 pushStack 返回
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
}
```
总的来说，
1）end() 方法返回 prevObject 属性，这个属性记录了上一步操作的 jQuery 对象合集；
2）而 prevObject 属性由 pushStack() 方法生成，该方法将一个 DOM 元素集合加入到 jQuery 内部管理的一个栈中，通过改变 jQuery 对象的 prevObject 属性来跟踪链式调用中前一个方法返回的 DOM 结果集合
3）当我们在链式调用 end() 方法后，内部就返回当前 jQuery 对象的 prevObject 属性，完成回溯。
### jQuery 正则与细节优化
### jQuery 变量冲突处理
