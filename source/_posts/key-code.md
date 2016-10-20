---
title: js 键盘码  
date: 2010-12-13 03:23:20
tags: 键盘码 
---
键盘各按键对应的数字
<!--more-->
## 键盘各按键对应的数字

| 键盘按键      | keycode     | 键盘按键  | keycode     | 键盘按键  | keycode     |
| ------------- |:-----------:| ---------:| -----------:| ---------:| -----------:|
| BackSpace      | 8 | Tab | 9 | Clear      | 12 |
| Enter | 13 | Shift      | 16 | Enter | 13 |
| Control | 17 | Alt | 18 | Pause | 19 |
| CapsLock | 20 | Escape | 27 | Space | 32 |
| Prior | 33 | Next | 34 | End | 35 |
| Home | 36 | Left | 37 | Upkey | 38 |
| Right | 39 | Down | 40 | Select | 41 |
| Print | 42 | Execute | 43 | Insert | 45 |
| Delete | 46 | Help | 47 |   |    |
| 0 | 48 | 1 | 49 | 2 | 50 |
| 3 | 51 | 4 | 52 | 5 | 53 |
| 6 | 54 | 7 | 55 | 8 | 56 |
| 9 | 57 |   |    |   |    | 
| A | 65 | B | 66 | C | 67 |
| D | 68 | E | 69 | F | 70 |
| G | 71 | H | 72 | I | 73 |
| J | 74 | K | 75 | L | 76 |
| M | 77 | N | 78 | O | 79 |
| P | 80 | Q | 81 | R | 82 |
| S | 83 | T | 84 | U | 85 |
| V | 86 | W | 87 | X | 88 |
| Y | 89 | Z | 90 |   |    |
| F1 | 112 | F2 | 113 | F3 | 114 |
| F4 | 115 | F5 | 116 | F6 | 117 |
| F7 | 118 | F8 | 119 | F9 | 120 |
| F10 | 121 | F11 | 122 |  |   | |



## 键盘码使用

1. 原生js使用
``` bash
document.onkeyup = function (event) {
    var e = event ? event : window.event;
    if (e.keyCode == 13) {
        alert('您按了回车键。');
    }
};
```

2. jQuery使用
``` bash
$(document).on('keyup',function(event){
    if (event.keyCode == 13) {
        alert('您按了回车键。');
    }
});
```