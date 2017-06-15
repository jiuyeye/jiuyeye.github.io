---
title: Docker学习
date: 2017-02-20 18:28:35
tags: Docker
---
Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。
<!-- more -->
### 什么是Docker

> Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。

Docker2013年开始进入业界，2014年下半年火热起来。
Docker使用沙箱机制，独立于硬件、语言、打包系统、框架等，相互之间没有任何接口。没有任何性能开销，更不依赖于其他。

**Docker通常用于如下场景**：
1.web应用的自动化打包和发布；
2.自动化测试和持续集成、发布；
3.在服务型环境中部署和调整数据库或其他的后台应用；
4.从头编译或者扩展现有的OpenShift或Cloud Foundry平台来搭建自己的PaaS环境。

**Docker局限**：
1.Docker是基于Linux 64bit的，无法在32bit的linux/Windows/unix环境下使用
2.LXC是基于cgroup等linux kernel功能的，因此container的guest系统只能是linux base的
3.隔离性相比KVM之类的虚拟化方案还是有些欠缺，所有container公用一部分的运行库
4.网络管理相对简单，主要是基于namespace隔离
5.cgroup的cpu和cpuset提供的cpu功能相比KVM的等虚拟化方案相比难以度量(所以dotcloud主要是按内存收费)
6.docker对disk的管理比较有限
7.container随着用户进程的停止而销毁，container中的log等用户数据不便收集

### Docker常用命令
```javascript
docker -h
//获取镜像
sudo docker pull NAME[:TAG]
```