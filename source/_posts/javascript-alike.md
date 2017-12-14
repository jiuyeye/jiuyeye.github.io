layout: post
title: javascript中相似的方法
date: 2012-02-10 22:57:55
categories: js
---
### substring与substr
|      | substring      |substr |
| :----------| :-------------| :-----------|
| 概述 |substring() 方法用于提取字符串中介于两个指定下标之间的字符。|substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。|
| 语法 | str.substring(start,stop) |str.substr(start,length) |
| 参数 | indexStart：一个 0 到字符串长度之间的整数<br>indexEnd：可选，一个 0 到字符串长度之间的整数 |start：开始提取字符的位置，可为负值<br>length：可选。提取的字符数 |
| 描述 | 1. indexStart = indexEnd，返回一个空字符串<br>2. indexStart > indexEnd，则效果是两个参数调换了一样<br>3. 省略 indexEnd，提取字符一直到字符串末尾<br>4. 任一参数 < 0 或为 NaN，则被当作 0<br>5. 任一参数 > strLength（字符串长度），则被当作strLength |1. start < 0，则被看作 strLength + start（从字符串倒数算起）<br>2. start < 0 && abs(start) > strLength，则start = 0<br>3. start >= strLength，返回一个空字符串<br>4. 任意参数为 NaN，则被当作 0<br>5. length <= 0，返回一个空字符串  |

### slice与splice
|      | slice      |splice |
| :----------| :-------------| :-----------|
| 概述|slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。 |splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。  |
| 语法|stringObject.slice(start,end) |arrayObject.splice(index,howmany,item1,.....,itemX)  |
| 参数|start要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。<br>end紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。 |index 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。<br>howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。<br>item1, ..., itemX 可选。向数组添加的新项目。 |
| 描述| |注释：该方法会改变原始数组。  |