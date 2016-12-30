---
title: js 浏览器缩放
date: 2016-12-30 14:04:58
tags: js
categories: js
---
由于浏览器缩放会破坏布局。为了防止用户无意识的缩放，此时就需要提醒用户应该将浏览器的缩放级别重置成默认的比例。
<!-- more -->

### 如何检测浏览器缩放

主要是浏览器标准接口`window.devicePixelRatio`，`window.devicePixelRatio`是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。
公式表示就是：window.devicePixelRatio = 物理像素 / dips。
该属性就可以用于检测网页是否被缩放了。在普通的 PC 浏览器上，在默认无缩放的情况下其默认值是 1。

dip或dp,（device independent pixels，设备独立像素）与屏幕密度有关。dip可以用来辅助区分视网膜设备还是非视网膜设备。
非视网膜屏幕的iphone上，屏幕物理像素320像素，独立像素也是320像素，window.devicePixelRatio等于1。
在视网膜屏幕的iphone上，屏幕物理像素640像素，独立像素还是320像素，window.devicePixelRatio等于2。

### 移动端设备
1. iOS

类似的，无视网膜设备devicePixelRatio值为1，视网膜设备为2. 因为实际的像素个数是双倍。不过，iphone似乎不愿意改变大家都熟知习惯的320像素宽度布局，没有把设备宽度一下子变成640像素，因此，dips宽度依然是320, 于是devicePixelRatio就是640/320 = 2.

iOS上的情况要相对简单些，除了1就是2. 在其他平台也基本上很简单，因为一般分辨率都比较挫，devicePixelRatio都是1.

2. Android

Nexus One分辨率是480*800, 为了最优的页面浏览，Android WebKit团队决定纵向手持时候的宽度依然是320像素，因此，devicePixelRatio值为480/320 = 1.5.
在同一手机上，Opera Mobile有相同的结论，dips为320宽，devicePixelRatio也是1.5 。

BlackBerry Torch 9810(OS7)物理像素同样480像素，BlackBerry WebKit团队决定坚持devicePixelRatio为1。在Torch显示器上480px宽度站点或多或少有些难以阅读。

Galaxy Nexus有像素的提升，为720×1200. Android团队决定提高dips层的宽度到360像素。从而使devicePixelRatio为720/360 = 2。

然而，Opera，坚持自我，dips宽度为320px, 于是devicePixelRatio为720/320 = 2.25. 不过似乎还与zoom缩放层级有关。

Galaxy Note物理像素为800×1200. 这里所有浏览器都决定使用与Galaxy Nexus一样的比率：Android WebKit, Chrome, 以及QQ都是2，也就意味着其dips宽度为400px. 然而，Opera依然一意孤行2.25, 于是其dips宽度值有些怪怪的: 356px.

Android标准似乎不严格，于是自家人玩自家人的游戏，对于开发者而言，可能又会面临苦逼~~

3. 视网膜MacBook

新的MacBook采用视网膜显示屏，其devicePixelRatio是2. 视网膜MacBook的物理像素是2800×1800，而显示出分辨率为1400×900，如果把分辨率作为dips层，则devicePixelRatio为2应该是无误的。

需要指出的是，如果你把分辨率改成1920×1200，devicePixelRatio依然是2. 严格来讲，这是不准确的，应该是1.5, 然而你也可以说MacBook的分辨率不同于dips层，这种情况下devicePixelRatio在台式机/笔记本下的定义就不一样（哪一个？不知道。）。

在任何情况下，根据苹果的规范做法，devicePixelRatio值只可能是1或者2. 如果你看到2，你要提供视网膜优化显示图片，如果是1，使用正常的图片。

### 实现检测代码

```javascript
function detectZoom(){ //检查是否缩放
    var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();

    if( ua.indexOf('firefox') > 0 ){ //火狐浏览器
        if( window.devicePixelRatio !== undefined ){
            ratio = window.devicePixelRatio;
        }
    }else if( ua.indexOf('msie') > 0 ){  //IE浏览器
        if( screen.deviceXDPI && screen.logicalXDPI ){
            ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
    }else if( window.outerWidth !== undefined && window.innerWidth !== undefined ){
        ratio = window.outerWidth / window.innerWidth;
    }

    if( ratio ){
        ratio = Math.round( ratio * 100 );
    }

    // 360安全浏览器下浏览器最大化时诡异的outerWidth和innerWidth不相等
    if( ratio === 99 || ratio === 101 ){
        ratio = 100;
    }

    //return screen.deviceXDPI;
    return ratio;
};
```