layout: post
title: underscore 学习2
date: 2015-12-08 16:28:14
tags: underscore
categories: js
---
Underscore对象
<!-- more -->

### Underscore对象封装
Underscore并没有在原生的JavaScript对象原型中进行扩展，而是像jQuery一样，将数据封装在一个自定义对象中（下文中称“Underscore对象”）。
你可以通过调用一个Underscore对象的value()方法来获取原生的JavaScript数据，例如：
```javascript
// 定义一个JavaScript内置对象
var jsData = {
    name : 'data'
}
// 通过_()方法将对象创建为一个Underscore对象
// underscoreData对象的原型中包含了Underscore中定义的所有方法，你可以任意使用
var underscoreData = _(jsData);
// 通过value方法获取原生数据, 即jsData
underscoreData.value();
```
### 优先调用JavaScript 1.6内置方法
Underscore中有许多方法在JavaScript1.6中已经被纳入规范，因此在Underscore对象内部，会优先调用宿主环境提供的内置方法（如果宿主环境已经实现了这些方法），以此提高函数的执行效率。
而对于不支持JavaScript 1.6的宿主环境，Underscore会通过自己的方式实现，而对开发者来说，这些完全是透明的。
这里所说的宿主环境，可能是Node.js运行环境，或客户端浏览器。

### 改变命名空间
Underscore默认使用_（下划线）来访问和创建对象，但这个名字可能不符合我们的命名规范，或容易引起命名冲突。
我们可以通过 `noConflict()` 方法来改变Underscore的命名，并恢复_（下划线）变量之前的值，例如：

```html
<script type="text/javascript">
    var _ = '自定义变量';
</script>
<script type="text/javascript" src="underscore/underscore-min.js"></script>
<script type="text/javascript">
    // Underscore对象
    console.dir(_);
    // 将Underscore对象重命名为us, 后面都通过us来访问和创建Underscore对象
    var us = _.noConflict();
    // 输出"自定义变量"
    console.dir(_);
</script>
```

### 链式操作
Underscore同样支持链式操作，需要先调用chain()方法进行声明：
```javascript
var arr = [10, 20, 30];
_(arr)
    .chain()
    .map(function(item){ return item++; })
    .first()
    .value();
```
如果调用了chain()方法，Underscore会将所调用的方法封装在一个闭包内，并将返回值封装为一个Underscore对象并返回：
```javascript
// 这是Underscore中实现链式操作的关键函数，它将返回值封装为一个新的Underscore对象，并再次调用chain()方法，为方法链中的下一个函数提供支持。
var result = function(obj, chain) {
    return chain ? _(obj).chain() : obj;
}
```

### 扩展Underscore
可以通过mixin()方法轻松地向Underscore中扩展自定义方法，例如：
```javascript
_.mixin({
    method1: function(object) {
        // todo
    },
    method2: function(arr) {
        // todo
    },
    method3: function(fn) {
        // todo
    }
});
```
这些方法被追加到Underscore的原型对象中，所有创建的Underscore对象都可以使用这些方法，它们享有和其它方法同样的环境。

### 遍历集合
each()和map()方法是最常用用到的两个方法，它们用于迭代一个集合（数组或对象），并依次处理集合中的每一个元素，例如:
```javascript
var arr = [1, 2, 3];
_(arr).map(function(item, i) {
    arr[i] = item + 1;
});
var obj = {
    first : 1,
    second : 2
}
_(obj).each(function(value, key) {
    return obj[key] = value + 1;
});
```
map()方法与each()方法的作用、参数相同，但它会将每次迭代函数返回的结果记录到一个新的数组并返回。

### 函数节流
函数节流是指控制一个函数的执行频率或间隔（就像控制水流的闸门一样），Underscore提供了debounce()和throttle()两个方法用于函数节流。
```html
<input type="text" id="search" name="search" />
<script type="text/javascript">
    var query = _(function() {
        // 在这里进行查询操作
    }).debounce(200);

    $('#search').bind('keypress', query);
</script>
```
debounce()方法关注函数执行的间隔，即函数两次的调用时间不能小于指定时间。
throttle()方法更关注函数的执行频率，即在指定频率内函数只会被调用一次。

### 模板解析
Underscore提供了一个轻量级的模板解析函数，它可以帮助我们有效地组织页面结构和逻辑。
```html
<ul id="element"></ul><!-- 用于显示渲染后的标签 -->

<!-- 定义模板，将模板内容放到一个script标签中 -->
<script type="text/template" id="tpl">
    <% for(var i = 0; i < list.length; i++) { %>
        <% var item = list[i] %>
        <li>
            <span><%=item.firstName%> <%=item.lastName%></span>
            <span><%-item.city%></span>
        </li>
    <% } %>
</script>
<script type="text/javascript" src="underscore/underscore-min.js"></script>
<script type="text/javascript">
    // 获取渲染元素和模板内容
    var element = $('#element'),
        tpl = $('#tpl').html();

    // 创建数据, 这些数据可能是你从服务器获取的
    var data = {
        list: [
            {firstName: '<a href="#">Zhang</a>', lastName: 'San', city: 'Shanghai'},
            {firstName: 'Li', lastName: 'Si', city: '<a href="#">Beijing</a>'},
            {firstName: 'Wang', lastName: 'Wu', city: 'Guangzhou'},
            {firstName: 'Zhao', lastName: 'Liu', city: 'Shenzhen'}
        ]
    }

    // 解析模板, 返回解析后的内容
    var html = _.template(tpl, data);
    // 将解析后的内容填充到渲染元素
    element.html(html);
</script>
```