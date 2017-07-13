---
title: Sass的控制命令
date: 2015-11-20 21:57:11
tags: sass
categories: css
---
###  @if
> @if 指令是一个 SassScript，它可以根据条件来处理样式块，如果条件为 true 返回一个样式块，反之 false 返回另一个样式块。在 Sass 中除了 @if 之，还可以配合 @else if 和 @else 一起使用。

```scss
@mixin blockOrHidden($boolean:true) {
  @if $boolean {
      @debug "$boolean is #{$boolean}";
      display: block;
    }
  @else {
      @debug "$boolean is #{$boolean}";
      display: none;
    }
}

.block {
  @include blockOrHidden;
}

.hidden{
  @include blockOrHidden(false);
}
```
编译出来的CSS:
```css
.block {
  display: block;
}
.hidden {
  display: none;
}
```

###  @for循环

```scss
//through
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
//to
@for $i from 1 to 3 {
  .p#{$i} { width: 2em * $i; }
}
```

###  @while循环
>@while 指令也需要 SassScript 表达式（像其他指令一样），并且会生成不同的样式块，直到表达式值为 false 时停止循环。这个和 @for 指令很相似，只要 @while 后面的条件为 true 就会执行

```scss
$types: 4;
$type-width: 20px;
@while $types > 0 {
    .while-#{$types} {
        width: $type-width + $types;
    }
    $types: $types - 1;
}
```
###  @each循环
>@each 循环就是去遍历一个列表，然后从列表中取出对应的值。