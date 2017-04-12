layout: post
title: css伪类可以做什么
date: 2016-10-18 22:39:52
tags: 伪类
categories: css
---
前几天看了一遍文章，利用css来美化图片加载失败的，css伪类可以做什么,不考虑低版本浏览器

<!--more-->

### 所有CSS伪类/元素

| 选择器      | 示例     | 示例说明  |
| :------------- |:-----------|:-----------|
| :link      | a:link | 选择所有未访问链接 |
| :visited   | a:visited | 选择所有访问过的链接 |
| :active    | a:active | 选择正在活动链接 |
| :hover     | a:hover | 把鼠标放在链接上的状态 |
| :focus     | a:focus | 选择元素输入后具有焦点 |
| :first-letter  | p:first-letter | 选择每个`<p>`元素的第一个字母 |
| :first-line   | p:first-line | 选择每个`<p>`元素的第一行 |
| :first-child  | p:first-child | 选择器匹配属于任意元素的第一个子元素的`<p>`元素 |
| :before     | p:before | 在每个`<p>`元素之前插入内容 |
| :after      | p:after | 在每个`<p>`元素之后插入内容 |
| :lang      | p:lang(it) | 为`<p>`元素的lang属性选择一个开始值 |


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

2. 做效果
3. 间隔符用法
4. 做border三角图标
5. 字符图标
6. webfont的图标
7. 做单位、标签、表单必填标准
8. 实现文字图片居中对齐
9. 清除浮动
10. 使用pointer-events消除伪元素事件
