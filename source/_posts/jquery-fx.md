---
title: jQuery.fx.interval 和jQuery.fx.off
date: 2013-09-12 19:30:27
tags: jQuery
---
<!-- more -->
### jQuery.fx.interval

> jQuery.fx.interval 属性用于改变以毫秒计的动画运行速率。可操作该属性来调整动画运行的每秒帧数。

默认值是 13 毫秒。该属性常用于修改动画运行的每秒帧数。
降低这个值能够使动画在更快的浏览器中运行得更流畅，但这么做也行会影响性能。
**提示：**由于 jQuery 使用一个全局的间隔时间，为了使该属性生效，动画应该不在运行或者首先停止所有动画。
**注释：**该属性在支持 requestAnimationFrame 属性的浏览器中无效，比如 Google Chrome 11。
```javascript
jQuery.fx.interval = milliseconds;
```
### jQuery.fx.off

>jQuery.fx.off 属性用于对所有动画进行全局禁用或启用。

默认值是 false，它允许动画正常运行。当设置为 true 时，将禁用所有动画方法，这样会把元素设置为其最后的状态，而不是显示效果。
**提示：**如需简化代码，可以使用 $.fx.off 来代替 jQuery.fx.off。
```javascript
jQuery.fx.off = true|false;
```