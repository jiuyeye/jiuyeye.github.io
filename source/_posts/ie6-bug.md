layout: post
title: IE6浏览器常见的bug及其修复方法
date: 2013-10-07 14:14:08
tags: [css,js]
categories: js
---
IE6浏览器常见的bug及其修复方法
<!-- more -->
* IE6不支持min-height，解决办法使用css hack：
.target { min-height: 100px; height: auto !important; height: 100px; // IE6下内容高度超过会自动扩展高度 }

* ol li display: list-item;

* 未定位父元素overflow: auto;position: relative;
```css
.outer {
width: 215px;
height: 100px;
border: 1px solid red;
overflow: auto;
position: relative; /* 修复bug */
}
.inner {
width: 100px;
height: 200px;
background-color: purple;
position: relative;
}
```
```html
<div class="outer">
    <div class="inner"></div>
</div>
```

* IE6只支持a:hover
```css
    .p:hover, .hover { background: purple; }
```
```html
    <p class="p" id="target">aaaa bbbbb<span>DDDDDDDDDDDd</span> aaaa lkjlkjdf j</p>
```
```javascript
function addClass(elem, cls) {
    if (elem.className) {
        elem.className += ' ' + cls;
    }
    else { elem.className = cls; }
}
function removeClass(elem, cls) {
    var className = ' ' + elem.className + ' ';
    var reg = new RegExp(' +' + cls + ' +', 'g');
    elem.className = className.replace(reg, ' ').replace(/^ +| +$/, '');
}
var target = document.getElementById('target');
if (target.attachEvent) {
    target.attachEvent('onmouseenter', function { addClass(target, 'hover'); });
    target.attachEvent('onmouseleave', function { removeClass(target, 'hover'); })
}
```
* IE5-8不支持opacity

```css
.opacity {
    opacity: 0.4 filter: alpha(opacity=60); /* for IE5-7 */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8*/
}
```
* IE6下font-size:0无效;解决方法：
```css
line-height:0;
overflow:hidden;
```

* IE6不支持PNG透明背景，解决办法: IE6下使用gif图片

* IE6-7不支持display:inline-block
```css
display: inline-block;
*display: inline;
*zoom: 1;
```
* IE6下浮动元素在浮动方向上与父元素边界接触元素的外边距会加倍。解决办法： 1）使用padding控制间距。 2）浮动元素display: inline;

* 通过为块级元素设置宽度和左右margin为auto时，IE6不能实现水平居中，解决方法：为父元素设置text-align: center;