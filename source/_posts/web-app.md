---
title: WebApp前端性能优化
date: 2017-01-12 20:36:24
tags: webapp
categories: js
---
移动端页面加载慢，图片加载不出来，怎么办？怎么优化？
<!-- more -->
### 加载优化
1. 合并css、javascript；
2. 使用雪碧图；
3. 缓存资源；
4. 使用长cache；
5. css、javascript使用外链；
6. 压缩html、css、javascript文件；
7. 启用Gzip；
8. 使用首屏加载；
9. 使用按需加载；
10. 使用滚屏加载；
11. 使用Media Query加载；
12. 增加loading进度条；
13. 减少cookie；
14. 避免重定向；
15. 异步加载第三方资源。

### CSS优化
1. css写在顶部，javascript写在底部或异步；
2. 避免图片或iframe等的空src；
3. 尽量避免重设图片大小；
4. 图片尽量避免使用DataURl;
5. 尽量避免在html标签中写style属性;
6. 避免css表达式；
7. 争取使用display属性；
8. 移除空的css规则；
9. 不滥用float；
10. 不滥用web字体；
11. 不声明过多的font-size;
12. 值为0时不需要单位；
13. 标准化各种浏览器前缀；
14. 避免让选择符看起来像正则表达式；

### 图片优化
1. 使用（css3、iconfont、svg）代替图片；
2. png8优于git；
3. webp优于png；
4. 首次加载不大于1014k；
5. 图片不宽于640；
6. 使用srcset；

### 脚本优化
1. 减少重绘或回流；
2. 缓存Dom选择和计算；
3. 缓存列表length；
4. 尽量使用事件代理，避免批量添加事件；
5. 尽量使用id选择；
6. 使用touchstart或touchend代替click；

### 脚本优化
1. HTML使用viewport；
2. 减少Dom节点；
3. 尽量使用css3动画；
4. 合理使用requestAnimateFrame代替setTimeout；
5. 使用touchmove、scroll会导致多次渲染；
6. 使用（css3 transition、css3 3D transforms、Canvas、Opacity、Webgl、video）来出发GPC渲染；
7. 适当使用canvas动画；