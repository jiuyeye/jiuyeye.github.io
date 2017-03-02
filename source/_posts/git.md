---
title: 使用 Git 进行问题定位以及代码查找
date: 2015-03-02 20:46:09
tags: git
---
通过 Git 来对代码的历史版本进行分析可能更加的效率。
<!-- more -->
### git blame定位代码责任人
```javascript
git blame -L 10,30 file.txt//文件10行到30行的修改记录
git blame -L 10,+20 file.txt//文件10行开始，偏移20行的修改记录
```
### git bisect(二分查找)查找问题引入版本
```javascript
git bisect start
git bisect bad  079944e6
git bisect good  03rfr44e6
git bisect reset
```
### git grep查找指定内容的位置
```javascript
git grep -n xxx//-n显示行数
git grep -e xxx//正则查找
git grep -e xxx --or -e yyy//正则查找
git grep -e xxx -e yyy
git grep -e xxx --and \(-e xxx --or --not -e yyy\)
```
### git log查找指定内容的历史记录
```javascript
git log --GLOG_BUF_MAX --oneline
git log --SLOG_BUG_MAX --oneline
```