layout: post
title: jQuery中的extend()方法
date: 2014-12-26 19:37:59
categories: js
---
> 通常使用jquery的extend时，大都是为了实现默认字段的覆盖(若传入某个字段的值，则使用传入值，否则使用默认值)。

<!-- more -->
```javascript
function getList(option){
    var _default = {
        name:"jack",
        age:"30",
        sex:"man"
    }
    $.extend(_default,option);
    return _default;
}
getList();  // {name: "jack", age: "30", sex: "man"}
getList({name:'bing'}); // {name: "bing", age: "30", sex: "man"}
getList({name:'bing', age:36, sex:'female'});  // {name: "bing", age: 36, sex: "female"}
```

### extend能实现哪些功能
> 将两个或更多对象的内容合并到第一个对象，

`jQuery.extend(target [,object1 ] [,objectN])`；extend方法需要至少传入一个参数，第一个必需，后面的都是可选参数。若传两个或两个以上的参数都是对象类型，那么就会把后面所有对象的内容合并给`target`(第一个对象)上。

> 为JQUERY扩展方法或属性

```javascript
$.extend({
    _name : 'wenzi',
    _getName : function(){
        return this._name;
    }
})

$._name; // wenzi
$._getName(); // wenzi
```

> 深度拷贝和浅度拷贝

jQuery.extend([deep],target,object1 [,objectN])
```javascript
var obj = {name:'wenzi', score:80};
var obj1 = {score:{english:80, math:90}}
$.extend(true, obj, obj1);
obj.score.english = 10;
console.log(obj.score.english);   // 10
console.log(obj1.score.english);  // 80
```

### extend实现原理