---
title: css3动画学习
date: 2017-01-27 10:06:50
tags: [animation,keyframes]
---
> 使用keyframes, animation属性，例如timing, delay, play state, animation-count, iteration count, direction, fill mode以及will-change等等创造动画

<!-- more -->

### @keyframes 规则
通过逐渐改变对象的运动状态的方式，我们可以将动画应用到到页面上的任何对象上。然而利用keyframes特性，我们便可以控制动画对象每一阶段的状态。
```css
@keyframes mykeyframes {
  0% {
    transform: scale3d(1, 1, 1);
  }
  50%{
    transform: scale3d(1.1, 1.1, 1.1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
/* 1.动画名（Animation name): mykeyframes */
/* 2.3个步骤：0%（state time), 50%（x time）, 100% （end time）*/
/* 3.CSS值：scale3d(x, y, z) */
```
当动画已经在(@keyframes)中定义好后，我们可以控制以下几样东西：
1. 动画的持续时间
2. 延迟多久动画开始
3. 动画的重复频率
4. 动画的方向
```css
button {
   animation-duration: 1s;//持续时长(duration)为1秒
   animation-name: mykeyframes;//添加了动画mykeyframes
}
```
[demo](http://codepen.io/lcq0202/pen/wJagdZ)

### 动画时间（Animation Timing)
动画时间函数是用于决定我们希望动画在移动周期内要进行加速和减速效果的时间。所以，为了实现这个效果，我们需要定义动画将要移动的速度。这里有一些我们常见的动画时间属性的选项值，例如：initial, inherit, ease, ease-in, ease-out, 还有linear等等。

animation-timing-function: value;

1. linear 动画从头到尾的速度是相同的。
2. ease 默认。动画以低速开始，然后加快，在结束前变慢。
3. ease-in 动画以低速开始。
4. ease-out 动画以低速结束。
5. ease-in-out 动画以低速开始和结束。
6. cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
[demo](http://codepen.io/lcq0202/pen/zZGNLz)

### 动画延时（Animation Delay）
动画延时常常应用于当我们需要对动画进行的延时操作的时候。即当某个动画被触发了，然后延时1S后开始执行。
动画延时：以秒或毫秒计

### 动画播放状态（Animation Play State）
动画播放状态常常用来控制动画是否需要暂停或者继续。

### 动画的循环次数
循环次数指单位时间内，动画所重复执行的次数。
1. 无限(infinite)：无限循环
2. 指定值(x)：动画重复x次
3. 继承(inherit)：继承父级的循环次数

### 动画方向（Animation Direction）
动画方向是用于指定动画对象的移动方向。例如是从尺寸0%到100%，还是从100%到%0，又或者是从0%到100%的大小，然后反转从100%到0%。
1. 顺序的(Normal): 指动画从0%到100%顺序执行
2. 倒序(Reverse): 动画从100%作为起点位置开始到0%倒序执行
3. 交替(Alernate): 动画先从0%变化到100%，然后从100%返回到0%
4. 反转-交替(Alternate-reverse): 动画从100%到0%倒序， 然后又从0%前进到100%正序执行

### 动画填充模式（Animation Fill Mode）
我们需要知道，当动画执行结束后，在动画执行期间给对象元素所添加的样式并不是永久的。这个样式仅仅是在动画期间被应用然后即被移除。关于动画应用的模式，我们可以使用以下属性值来表示：
1. 向后（Backward）: 在动画处于0%时，样式会被应用到元素上
2. 向前（Forward）: 在动画处于100%时，样式会被应用到元素上
3. 兼得（Both): 在动画开始和结束时样式会被应用
4. 初始值（Initial): 设置这个属性为默认值

### 将要改变（Will-Change）
通过Will-Change属性，我们可以在动画执行前，提前通知浏览器上我们将要执行动画的对象元素。这就允许了我们可以一次性的对元素的多个属性进行动画操作。从而减少大部分动画执行期间潜在的性能损耗问题。
