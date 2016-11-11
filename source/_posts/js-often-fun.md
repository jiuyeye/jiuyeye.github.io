---
title: js中常用技巧--常用正则验证表达式
date: 2013-12-17 14:06:51
tags: 正则
categories: js
---

总结js中常用函数和常用技巧

<!--more-->

手机号验证

```javascript
var validate = function(num){
  var exp =/^1[3-9]\d{9}$/;
  return exp.test(num);
}
```

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op
```

去掉字符串首尾空白
```javascript
if(!String.prototype.trim){
	String.prototype.trim = function(){
		return this.replace(/^\s+/,"").replace(/\s+$/,"");
	}
};

var str = " \t\n test string ".trim();
console.log(str == "test string");
```
