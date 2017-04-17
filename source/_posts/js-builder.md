layout: post
title: Javascript 设计模式之建造者模式
date: 2013-11-17 17:50:59
tags: 设计模式
categories: js
---
> 建造者模式可以将一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是说如果我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细节就不需要知道了。

<!-- more -->
建造者模式主要用于`分步骤构建一个复杂的对象`，在这其中`分步骤`是一个稳定的算法，而复杂对象的各个部分则经常变化，其优点是：建造者模式的“加工工艺”是暴露的，这样使得建造者模式更加灵活，并且建造者模式解耦了组装过程和创建具体部件，使得我们不用去关心每个部件是如何组装的。

### 建造者模式的作用

1. 分步创建一个复杂对象；
2. 解耦封装过程和具体创建的组件；
3. 无需关心组件如何组装；

### 注意事项

1. 一定要一个稳定的算法支撑；
2. 加工工艺是暴漏的；

```javascript
function workerBuilder() {
  this.workOne = function() {//建房子骨架

  }
  this.workTwo=function() {//建睡房
  }
  this.workThree=function() {//建厨房

  }
  this.workFour=function() {//建客厅

  }

  this.getResult = function() {//建成房子
　  var house = new House();
　　return house;　
  }
}

function Director() {
  this.construct = function(builder) {
    builder.workOne();
    builder.workTwo();
    builder.workThree();
    builder.workFour();
    //上面的内容，顺序可设置，并且工作项也可以设定
  }
}

function House() {
  this.HouseFrame = '';
  this.Room = '';
  this.Kitchen = '';
  this.LivingRoom = '';
}

var builder = new workBuilder();
var director = new Director();
director.construct(builder);
var house = builder.getResult();
```