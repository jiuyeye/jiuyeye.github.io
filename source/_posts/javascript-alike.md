---
title: javascript中相似的方法
date: 2012-02-10 22:57:55
categories: js
---
### substring与substr
|      | substring      |substr |
| :----------| :-------------| :-----------|
| 概述      |  |  |
| 语法 | str.substring(start,stop) |str.substr(start,length) |
| 参数 | indexStart：一个 0 到字符串长度之间的整数<br>indexEnd：可选，一个 0 到字符串长度之间的整数 |start：开始提取字符的位置，可为负值<br>length：可选。提取的字符数 |
| 描述 | 1. indexStart = indexEnd，返回一个空字符串<br>2. indexStart > indexEnd，则效果是两个参数调换了一样<br>3. 省略 indexEnd，提取字符一直到字符串末尾<br>4. 任一参数 < 0 或为 NaN，则被当作 0<br>5. 任一参数 > strLength（字符串长度），则被当作strLength |1. start < 0，则被看作 strLength + start（从字符串倒数算起）<br>2. start < 0 && abs(start) > strLength，则start = 0<br>3. start >= strLength，返回一个空字符串<br>4. 任意参数为 NaN，则被当作 0<br>5. length <= 0，返回一个空字符串  |

### slice与splice