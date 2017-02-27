---
title: yarn学习-命令
date: 2016-11-12 18:43:42
tags: yarn
---
通过 npm i -g yarn 进行了安装，具体怎样使用
<!-- more -->

| npm命令      | yarn命令     | 说明  |
|:------------- |:-----------|:-----------|
| npm install   | yarn       | install 安装是默认行为 |
| npm install webpack --save  | yarn add webpack | webpack包立即被保存到 package.json 中 |
| npm uninstall webpack --save  | yarn remove webpack | 卸载node模块 |
| npm install webpack --save-dev  | yarn add webpack --dev |  |
| npm update --save  | yarn upgrade | 更新 |
| npm install webpack --global | yarn global add webpack | 全局安装 |
| npm link | yarn link | 创建全局链接 |
| npm outdated | yarn outdated | 检查包是否已经过时，此命令会列出所有已经过时的包 |
| npm publish | yarn publish | 发布示例 |
| npm run | yarn run | 自动化任务 |
| npm cache clean | yarn cache clean | 清理缓存 |
|  | yarn cache ls | 列出缓存模块 |
|  | yarn cache dir | 缓存路径 |
| npm login | yarn login |  |
| npm test | yarn test |  |
|  | yarn licenses ls | 允许你检查依赖的许可信息 |
|  | yarn licenses generate| 自动创建依赖免责声明license |
|  | yarn why webpack| 检查为什么会安装webpack，详细列出依赖它的其他包 |