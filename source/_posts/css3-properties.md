---
title: CSS3高级属性
date: 2017-04-22 22:57:11
tags: css
categories: css
---

CSS3高级属性
<!-- more -->
##  WebKit特有属性
1. -webkit-tap-highlight-color
>当你点击一个链接或者通过Javascript定义的可点击元素的时候，就会出现一个半透明的灰色背景。要重设这个表现，设置-webkit-tap-highlight-color为任何颜色。**只用于iOS (iPhone和iPad)**...

2. -webkit-text-size-adjust
>1、当样式表里font-size<12px时，中文版chrome浏览器里字体显示仍为12px，这时可以用 html{-webkit-text-size-adjust:none;}
2、-webkit-text-size-adjust放在body上会导致页面缩放失效
3、body会继承定义在html的样式
4、用-webkit-text-size-adjust不要定义成可继承的或全局的
3. webkit-appearance
> -webkit-appearance: none;   //消除输入框和按钮的原生外观，在iOS上加上这个属性才能给按钮和输入框自定义样式 。   注意：不同type的input使用这个属性之后表现不一。text、button无样式，radio、checkbox直接消失
4. -webkit-user-select
> -webkit-user-select: none; // 禁止页面文字选择 ，此属性不继承，一般加在body上规定整个body的文字都不会自动调整
5. -webkit-touch-callout
> -webkit-touch-callout:none;  // 禁用长按页面时的弹出菜单(iOS下有效) ,img和a标签都要加
6. -webkit-mask
> -webkit-mask让为一个元素添加蒙板成为可能，从而你可以创建任意形状的花样。蒙板可以是CSS3渐变或者半透明的PNG图片。蒙板元素的alpha值为0的时候会覆盖下面的元素，为1的时候会完全显示下面的内容。相关的属性有-webkit-mask-clip、 -webkit-mask-position 和-webkit-mask-repeat等，严重依赖来自于background中的语法。
7. -webkit-text-stroke
8. -webkit-nbsp-mode
9. -webkit-tap-highlight-color
### zoom: reset
### -webkit-margin-collapse
### -webkit-box-reflect
### -webkit-marquee
##  Gecko特有属性
1. font-size-adjust
> 设定指定元素的文字大小(font-size)应该相对于小写字母的高度(x-height)而不是大写字母的高度(cap height)
##  混合属性
1. -webkit-user-select 和 -moz-user-select
> 网站上选择文本，将-webkit-user-select 和-moz-user-select 的值设为none。