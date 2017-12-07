---
title: jQuery 停止动画
date: 2013-07-06 19:57:48
tags: jQuery
---
jQuery stop() 方法用于在动画或效果完成前对它们进行停止。
<!-- more -->

停止当前正在运行的动画：
```javascript
$("#stop").click(function(){
  $("#box").stop();
});
```