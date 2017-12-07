---
title: jQuery 文档操作 - detach() 方法
date: 2013-12-07 15:18:30
tags: jQuery
---
detach()方法移除被选元素，包括所有文本和子节点。
<!-- more -->

> 会保留 jQuery 对象中的匹配的元素，因而可以在将来再使用这些匹配的元素。
detach() 会保留所有绑定的事件、附加的数据，这一点与 remove() 不同。

```javascript
$("button").click(function(){
    $("body").append($("p").detach());
});
$("p").click(function(){
    $(this).animate({fontSize:"+=1px"})
});
```