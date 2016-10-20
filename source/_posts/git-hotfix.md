---
title: hotfix 修复流程  
date: 2014-06-14 10:07:00
tags: [git,hotfix] 
description: hotfix 修复流程
---

小型项目：git下hotfix修复流程，
开发阶段（第一版上线后）：3个分支 develop、master、hotfix

多处于来的hotfix用于紧急上线（bug，新需求等）。hotfix基于master，因为develop已经越走越远，基于develop的hotfix会将带上一些当前不想上线的新功能。

hotfix完成后hotfix要merge到master上，因为线上不管何种情况都是master版本。qa完成测试并且上线后要将master版本merge到develop避免hotfix的修改在develop中丢失。

维护阶段(停止常规开发)：2个分支 master、hotfix。

<!--more-->


git status  查看自己的git状态 保证没有未提交的
git stash list   查看自己的stash列表 保证是空的
git stash    暂存
git check hotfix   切到hotfix
git pull   
 
##开始修改
git add 
git commit
git push

##修改完成
git status   查看自己的git状态 保证没有未提交的
git check develop  切换到develop分支
git pull

##合并到dev
git merge hotfix    合并hotfix代码   这里如果有冲入需要merge冲突然后再提交

##合并完成
git stash pop    把自己暂存的代码拿出来

ok