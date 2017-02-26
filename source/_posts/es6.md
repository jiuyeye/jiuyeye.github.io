---
title: es6模块化
date: 2016-10-26 20:38:43
tags: es6
categories: js
---
> ES6模块主要有两个功能：export和import

<!-- more -->

export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
import用于在一个模块中加载另一个含有export接口的模块。

### export——

```javascript
//基本的两种用法：第一种
export function foo() {  
// ..  
}  
export var awesome = 42;  
var bar = [1,2,3];  
export { bar };  

//第二种
function foo() {  
// ..  
}  
var awesome = 42;  
var bar = [1,2,3];  
export { foo, awesome, bar };  
```
```javascript
//导出的时候重命名:
function foo() { .. }  
export { foo as bar };  
//默认导出，每个模块只能有一个默认导出：
function foo(..) {  
// ..  
}  
export default foo;  
export{ foo as default }; 
//混合默认导出和普通的导出：
function foo() { .. }  
function bar() { .. }  
function baz() { .. }  
export { foo as default, bar, baz, .. }; 
//从其他模块导出：
export { foo, bar } from "baz";  
export { foo as FOO, bar as BAR } from "baz";  
export * from "baz"; 
```
### import——
```javascript
//1.
import { foo } from "foo";  
foo(); 
//2.
import { foo as theFooFunc } from "foo";  
theFooFunc();  
//3.
import foo from "foo";  
// or:  
import { default as foo } from "foo"; 

//4.
export default function foo() { .. }  
export function bar() { .. }  
export function baz() { .. }  
  
import FOOFN, { bar, baz as BAZ } from "foo";  
FOOFN();  
bar();  
BAZ();  
//5.
export function bar() { .. }  
export var x = 42;  
export function baz() { .. }  
  
import * as foo from "foo";  
foo.bar();  
foo.x; // 42  
foo.baz();  
```
import有一个hoisted的过程，和var声明变量一样：
```javascript
foo();  
import { foo } from "foo";
```