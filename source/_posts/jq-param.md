---
title: jQuery ajax-param()和serializeArray()
date: 2013-10-27 16:06:03
tags: jQuery
---
<!-- more -->
### param()
>param() 方法创建数组或对象的序列化表示。
该序列化值可在进行 AJAX 请求时在 URL 查询字符串中使用。

序列化一个 key/value 对象：

```javascript
var params = { width:1900, height:1200 };
var str = jQuery.param(params);
$("#results").text(str);
//width=1900&height=1200
```
*如果被传递的对象在数组中，则必须是以 .serializeArray() 的返回值为格式的对象数组：*
```javascript
[{name:"first",value:"Rick"},
{name:"last",value:"Astley"},
{name:"job",value:"Rock Star"}]
```
### serializeArray()
> serializeArray() 方法通过序列化表单值来创建对象数组（名称和值）。
您可以选择一个或多个表单元素（比如 input 及/或 textarea），或者 form 元素本身。