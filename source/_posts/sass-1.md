---
title: sass的@规则
date: 2015-11-22 22:57:11
tags: sass
categories: css
---
Sass 支持所有 CSS3 的 @ 规则， 以及一些 Sass 专属的规则，也被称为“指令（directives）”。 这些规则在 Sass 中具有不同的功效，详细解释如下。
<!-- more -->
###  @import
> Sass 扩展了 CSS 的 @import 规则，让它能够引入 SCSS 和 Sass 文件。 所有引入的 SCSS 和 Sass 文件都会被合并并输出一个单一的 CSS 文件。 另外，被导入的文件中所定义的变量或 mixins 都可以在主文件中使用。

@import 根据文件名引入。 默认情况下，它会寻找 Sass 文件并直接引入， 但是，在少数几种情况下，它会被编译成 CSS 的 @import 规则：

如果文件的扩展名是 .css。
如果文件名以 http:// 开头。
如果文件名是 url()。
如果 @import 包含了任何媒体查询（media queries）。

如果你有一个 SCSS 或 Sass 文件需要引入， 但是你又不希望它被编译为一个 CSS 文件， 这时，你就可以在文件名前面加一个下划线，就能避免被编译。 这将告诉 Sass 不要把它编译成 CSS 文件。 然后，你就可以像往常一样引入这个文件了，而且还可以省略掉文件名前面的下划线。

###  @media

###  @extend

###  @at-root

###  @debug

###  @warn

###  @error