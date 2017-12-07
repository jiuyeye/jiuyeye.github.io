---
title: jQuery clearQueue() 方法
date: 2013-08-12 20:57:48
tags: jQuery
---
clearQueue() 方法停止队列中所有仍未执行的函数。
<!-- more -->
clearQueue() 方法停止队列中所有仍未执行的函数。
*与 stop() 方法不同，（只适用于动画），clearQueue() 能够清除任何排队的函数（通过 .queue() 方法添加到通用 jQuery 队列的任何函数）。*

```javascript
$(document).ready(function(){
  $("#start").click(function(){
    $("#box").animate({height:300},"slow");
    $("#box").animate({width:300},"slow");
    $("#box").queue(function () {
      $(this).css("background-color","red");
      $(this).dequeue();
    });
    $("#box").animate({height:100},"slow");
    $("#box").animate({width:100},"slow");
  });
  $("#stop").click(function(){
    $("#box").clearQueue();
  });
});
```