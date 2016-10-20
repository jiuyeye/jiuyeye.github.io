---
title: js中常用技巧--常用正则验证表达式
date: 2013-12-17 14:06:51
tags: js
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
