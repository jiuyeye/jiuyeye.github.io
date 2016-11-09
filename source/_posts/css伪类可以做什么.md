---
title: css伪类可以做什么
date: 2016-10-18 22:39:52
tags: [css,伪类]
categories: css
---
css伪类可以做什么,不考虑低版本浏览器

<!--more-->

前几天看了一遍文章，利用css来美化图片加载失败的。

1. 利用css伪类来美化加载失败的图片

```CSS
img:after {  
  content: "f1c5" " " attr(alt);
  font-size: 16px;
  font-family: FontAwesome;
  color: rgb(100, 100, 100);
  display: block;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
```

2. 利用css伪类来增加动画

