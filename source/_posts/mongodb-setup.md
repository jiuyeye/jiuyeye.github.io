layout: post
title: 【MongoDB数据库学习】安装、配置  
date: 2014-09-11 22:32:58
tags: MongoDB
---

【MongoDB数据库】安装、配置  

<!-- more -->

**1、下载 MongoDB**

官方下载地址： http://www.mongodb.org/downloads

本机是Windows 7 32位，所以下载的是mongodb-win32-i386-2.6.1.zip，后续例程均是基于该版本数据库。

**2、配置环境变量**
解压mongodb-win32-i386-2.6.1.zip文件到E:\，并重新命名mongodb-win32-i386-2.6.1文件夹为mongodb。

并在系统设置中配置环境变量path = E:\mongodb\bin;（ 便于在命令行中直接使用mogodb命令 ）

**3、配置MongoDB数据库**
创建一个mongo.config配置文件，配置MongoDB数据库的dbpath（数据库存储路径）和logpath(日志文件存储路径)；

你也可是使用 --dbpath选项和 --logpath选项来配置路径； 
##store data here
dbpath=E:\mongodb\data
 
##all output go here
logpath=E:\mongodb\log\mongo.log

特别提示：

由于`dbpath`路径为 E:\mongodb\data ,而这个文件夹默认不存在，需手动创建，不然在执行MongoDB服务器时会提示找不到该文件夹；同理，也需手动创建一个 E:\mongodb\log文件夹用于保存日志。

**4、启动MongoDB服务器**
使用 mongod.exe --config E:\mongodb\mongo.config 启动MongoDB服务器。--config 选项表示启动时通过 E:\mongodb\mongo.config配置文件的信息配置服务器。

```shell
mongod.exe --config E:\mongodb\mongo.config
```

**5、连接MongoDB服务器**
使用mongo.exe连接已经启动的MongoDB server。（如果第4步服务器没有启动成功，连接MongoDB服务器时会报第7步异常里的错误！）
启动成功后，进入mongodb shell命令行，在 mongodb shell命令行 中我们可以进行数据库的访问，已经对数据库执行CRUD操作。

**6、添加MongoDB到Winodows服务（如果不成功，使用管理员身份）**
window服务来启动MongoDB 服务器。其实做到第5步，我们已经完成了对MongoDB数据的安装已经配置，可以直接开始鼓捣MongoDB CRUD命令了，但是每次都通过第4步进行添加配置并启动难免麻烦，这才有了第6步添加MongoDB到window服务，实现了通过启动服务来启动MongoDB 服务器。

1）添加MongoDB到Windows Service, 以便于通过window服务配置系统启动时MongoDB服务自动启动。配置成功后，在控制面板的服务中可看到该服务，如下图所示：
```shell
C:\Users\Administrator>mongod --config D:\mongodb\mongo.config --install
```

2）启动MongoDB服务

```shell
C:\Users\Administrator> net start MongoDB
```
3）停止MongoDB服务
```shell
C:\Users\Administrator> net stop MongoDB
```
4）从windows服务中移除MongoDB服务
```shell
C:\Users\Administrator> mongod --remove
```
5）通过mongod --help查看更多的配置命令选项。
```shell
C:\Users\Administrator> mongod --help

--install install mongodb service 
--remove remove mongodb service 
```

7、异常：
warning: Failed to connect to 127.0.0.1:27017, reason: errno:10061

表示：没有启动MondoDB服务器，或启动服务器失败；

8、参考：
How To Install MongoDB On Windows（ 推荐 ）

Install MongoDB on Windows

MongoDB configuration options