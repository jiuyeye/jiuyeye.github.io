layout: post
title: H5 CSS hack 和浏览器内核
date: 2014-06-24 12:59:52
tags: [h5,浏览器内核]
---



<!--more-->

```CSS

 .color{
	 background-color: #CC00FF; /*所有浏览器都会显示为紫色*/
	 background-color: #FF0000\9; /*IE8及以上的浏览器会显示红色*/
	 background-color: #ff6600\0; /*IE8及以上的浏览器会显示橙色*/
	 *background-color: #0066FF; /*IE6、IE7会变为蓝色*/
	 +background-color: #FFFF00; /*IE6、IE7会变为蓝色*/
	 _background-color: #009933; /*IE6会变为绿色*/
 }

```

## 主流浏览器的内核

| Trident 内核      | Webkit 内核     | Gecko 内核  | Presto内核     |
| ------------- |:-----------| :---------| :-----------| :---------|
| 俗称IE浏览器的内核 | 俗称谷歌浏览器的内核 | 俗称火狐浏览器的内核  | 俗称欧朋浏览器的内核 |

### 最常用的内核是Trident内核和Webkit内核。手机浏览器的默认内核是Webkit内核。
| 浏览器      | 介绍   |
| ------------- |:-----------|
| IE |IE6、IE7、IE8（Trident 4.0）、IE9（Trident 5.0）、IE10（Trident 6.0） |
|360浏览器 | 360安全浏览器（1.0-5.0为Trident，6.0为Trident+Webkit，7.0为Trident+Blink）,360极速浏览器（7.5之前为Trident+Webkit，7.5为Trident+Blink）|
|猎豹浏览器 |猎豹极轻浏览器（7.5之前为Trident+Webkit，7.5为Trident+Blink）猎豹安全浏览器（1.0-4.2版本为Trident+Webkit，4.3及以后版本为Trident+Blink）猎豹极轻浏览器，傲游浏览器（傲游1.x、2.x为IE内核，3.x为IE与Webkit双核）  |
|百度浏览器| 百度浏览器（早期版本）（最初为IE内核，2013年采用Chrome+IE内核）|
|世界之窗浏览器|最初为IE内核，2013年采用Chrome+IE内核|
|傲游浏览器| 傲游1.x、2.x为IE内核，3.x为IE与Webkit双核|
