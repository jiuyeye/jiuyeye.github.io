---
title: jQuery-2-奇技淫巧学习
date: 2013-06-20 16:23:43
tags: jQuery
categories: js
---
jQuery中的奇技淫巧
<!-- more -->
### 短路表达式 与 多重短路表达式

**短路表达式**：作为"&&"和"||"操作符的操作数表达式，这些表达式在进行求值时，只要最终的结果已经可以确定是真或假，求值过程便告终止，这称之为短路求值。这是这两个操作符的一个重要属性。
```javascript
// ||短路表达式
var foo = a || b;
// 相当于
if(a){
    foo = a;
}else{
    foo = b;
}

// &&短路表达式
var bar = a && b;
// 相当于
if(a){
    bar = b;
}else{
    bar = a;
}
```
```javascript
// 选自 jQuery 源码中的 Sizzle 部分
function siblingCheck(a, b) {
    var cur = b && a,
        diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
    // other code ...
}
```
*注意*
1、在 Javascript 的逻辑运算中，0、""、null、false、undefined、NaN 都会判定为 false ，而其他都为 true ；
2、因为 Javascript 的内置弱类型域 (weak-typing domain)，所以对严格的输入验证这一点不太在意，即便使用 && 或者 || 运算符的运算数不是布尔值，仍然可以将它看作布尔运算。虽然如此，还是建议如下：
```javascript
if(foo){ ... }     //不够严谨
if(!!foo){ ... }   //更为严谨，!!可将其他类型的值转换为boolean类型
```

### 钩子机制（hook）
> 钩子机制在浏览器兼容方面起了十分巨大的作用,钩子是编程惯用的一种手法，用来解决一种或多种特殊情况的处理。钩子就是适配器原理，或者说是表驱动原理，我们预先定义了一些钩子，在正常的代码逻辑中使用钩子去适配一些特殊的属性，样式或事件，这样可以让我们少写很多 else if 语句。

// 如果不用钩子的情况
```javascript
function examinee(name, score, fatherName) { // 考生分数以及父亲名
    return {
        name: name,
        score: score,
        fatherName: fatherName
    };
}

// 审阅考生们
function judge(examinees) {
    var result = {};
    for (var i in examinees) {
        var curExaminee = examinees[i];
        var ret = curExaminee.score;
        // 判断是否有后门关系
        if (curExaminee.fatherName === 'xijingping') {
            ret += 1000;
        } else if (curExaminee.fatherName === 'ligang') {
            ret += 100;
        } else if (curExaminee.fatherName === 'pengdehuai') {
            ret += 50;
        }
        result[curExaminee.name] = ret;
    }
    return result;
}


var lihao = examinee("lihao", 10, 'ligang');
var xida = examinee('xida', 8, 'xijinping');
var peng = examinee('peng', 60, 'pengdehuai');
var liaoxiaofeng = examinee('liaoxiaofeng', 100, 'liaodaniu');

var result = judge([lihao, xida, peng, liaoxiaofeng]);

for (var name in result) { // 根据分数选取前三名
    console.log("name:" + name);
    console.log("score:" + score);
}
```
// relationHook 是个钩子函数，用于得到关系得分
```javascript
var relationHook = {
    "xijinping": 1000,
    "ligang": 100,
    "pengdehuai": 50,
　　 // 新的考生只需要在钩子里添加关系分
}

function examinee(name, score, fatherName) {// 考生分数以及父亲名
    return {
        name: name,
        score: score,
        fatherName: fatherName
    };
}

function judge(examinees) { // 审阅考生们
    var result = {};
    for (var i in examinees) {
        var curExaminee = examinees[i];
        var ret = curExaminee.score;
        if (relationHook[curExaminee.fatherName] ) {
            ret += relationHook[curExaminee.fatherName] ;
        }
        result[curExaminee.name] = ret;
    }
    return result;
}

var lihao = examinee("lihao", 10, 'ligang');
var xida = examinee('xida', 8, 'xijinping');
var peng = examinee('peng', 60, 'pengdehuai');
var liaoxiaofeng = examinee('liaoxiaofeng', 100, 'liaodaniu');

var result = judge([lihao, xida, peng, liaoxiaofeng]);

for (var name in result) { // 根据分数选取前三名
    console.log("name:" + name);
    console.log("score:" + score);
}
```