layout: post
title: Windows下Git多账号配置，同一电脑多个ssh-key的管理
date: 2016-03-05 20:00:04
tags: git
---

多个git账户生成多份rsa秘钥实现多个账户同时使用配置

<!-- more -->

### 1.生成github.com对应的私钥公钥（本文中文件地址C:/Users/Administrator/.ssh）
```javascript
ssh-keygen -t rsa -C myself@email.com //创建github对应的sshkey，命名为id_rsa_self

//设置名称为id_rsa_self
Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa):id_rsa_self
```
生成的~/.ssh/id_rsa_self.pub文件，将里面的内容添加到GitHub后台

### 2.同样的方式生成mywork@email.com的私钥公钥
```javascript
ssh-keygen -t rsa -C mywork@email.com //创建github对应的sshkey，命名为id_rsa_work

//设置名称为id_rsa_work
Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa):id_rsa_self
```
生成的~/.ssh/id_rsa_work.pub文件，将里面的内容添加到GitHub后台

### 3.新密钥添加到SSH agent中
因为默认只读取id_rsa，为了让SSH识别新的私钥，需将其添加到SSH agent中：
```javascript
ssh-agent bash
ssh-add ~/.ssh/id_rsa_self
ssh-add ~/.ssh/id_rsa_work
```

### 4.修改config
```javascript
touch config //创建config

//该文件用于配置私钥对应的服务器
//Default github user(first@mail.com)
Host github.com
HostName github.com
User git
IdentityFile C:/Users/Administrator/.ssh/id_rsa_self

//second user(second@mail.com)
//建一个github别名，新建的帐号使用这个别名做克隆和更新
Host github2
HostName github.com
User git
IdentityFile C:/Users/Administrator/.ssh/id_rsa_work
```
### 5.测试：
```javascript
$ ssh -T git@github.com
Hi jiuyeye! You've successfully authenticated, but GitHub does not provide shel
l access.

$ ssh -T github2
Hi jiuyeye! You've successfully authenticated, but GitHub does not provide shell
 access.
```

### 6.clone
```javascript
d:/work
$ git clone git@github.com:jiuyeye/jiuyeye.github.io.git
Cloning into 'blog'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (3/3), done.
Checking connectivity... done
```
### 7.push的时候需要设置
```javascript
git config --global user.name "myself"
git config --global user.email "myself@email.com"
```
