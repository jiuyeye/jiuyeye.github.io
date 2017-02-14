---
title: 算法-字符串方面
date: 2012-05-10 14:19:40
tags: 算法
categories: js
---
### 回文检测

如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

如果给定的字符串是回文，返回true，反之，返回false。


注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。
```javascript
function palindrome(str) {
  var re = /[\W_]/g;// 或者 var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re,"");

  for(var i=0,j=str.length-1;i<j;i++,j--){
    if(str[i] != str[j]){
       return false;
    }
  }
  return true;
}

palindrome("eye");
```
### 找到提供的句子中最长的单词，并计算它的长度。

函数的返回值应该是一个数字。
```javascript
function findLongestWord(str) {
  var newArray = str.split(" ").sort(function(a,b){
    return a.length-b.length;
  }).reverse();
  return newArray[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");//6
```
### 将字符串中的每一个单词的首字母变为大写其余均为小写
```javascript
function titleCase(str) {
  str=str.split(" ");
  var newArr=[];
  for(var i=0;i<str.length;i++){
    newArr.push(str[i][0].toLocaleUpperCase()+str[i].substring(1).toLocaleLowerCase());
  }
  return newArr.join(" ");
}

titleCase("I'm a little tea pot");
```
### 判断字符串是否指定字符串开始/结尾的方法
```javascript
// 利用substr
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var len=str.length-target.length;
  return (len >= 0 && str.substr(len)==target);//也可以用return (len>=0&&str.lastIndexOf(target)==len);
}

confirmEnding("Bastian", "n");
```