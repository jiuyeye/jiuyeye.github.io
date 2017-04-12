layout: post
title: JavaScript 设计模式之模板方法
date: 2013-10-32 19:41:28
tags: 设计模式
categories: js
---
> 模板方法（TemplateMethod）定义了一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。

<!-- more -->
模板方法是一种代码复用的基本技术，在类库中尤为重要，因为他们提取了类库中的公共行为。模板方法导致一种反向的控制结构，这种结构就是传说中的“好莱坞法则”，即“别找我们，我们找你”，这指的是父类调用一个类的操作，而不是相反。具体体现是面向对象编程编程语言里的抽象类（以及其中的抽象方法），以及继承该抽象类（和抽象方法）的子类。

```javascript
var CaffeineBeverage = function (){};
CaffeineBeverage.prototype.prepareRecipe = function () {
    this.boilWater();
    this.brew();
    this.pourOnCup();
    if (this.customerWantsCondiments()) {
        // 如果可以想加小料，就加上
        this.addCondiments();
    }
};
CaffeineBeverage.prototype.boilWater = function () {
    console.log("将水烧开!");
};
CaffeineBeverage.prototype.pourOnCup = function () {
    console.log("将饮料到再杯子里!");
};
CaffeineBeverage.prototype.brew = function () {
    throw new Error("该方法必须重写!");
};
CaffeineBeverage.prototype.addCondiments = function () {
    throw new Error("该方法必须重写!");
};
// 默认加上小料
CaffeineBeverage.prototype.customerWantsCondiments = function () {
    return true;
};

var Coffee = function () {
    CaffeineBeverage.apply(this);
};
Coffee.prototype = new CaffeineBeverage();
Coffee.prototype.brew = function () {
    console.log("从咖啡机想咖啡倒进去!");
};
Coffee.prototype.addCondiments = function () {
    console.log("添加糖和牛奶");
};
Coffee.prototype.customerWantsCondiments = function () {
    return confirm("你想添加糖和牛奶吗？");
};

//冲茶叶
var Tea = function () {
    CaffeineBeverage.apply(this);
};
Tea.prototype = new CaffeineBeverage();
Tea.prototype.brew = function () {
    console.log("泡茶叶!");
};
Tea.prototype.addCondiments = function () {
    console.log("添加柠檬!");
};
Tea.prototype.customerWantsCondiments = function () {
    return confirm("你想添加柠檬嘛？");
};
```
### 模板方法的作用
1. 一次性实现算法不变的部分，并将可变得行为留给子类实现。
2. 各子类中公共的行为应被提取出来并集中到公共父类中避免代码重复，不同之处分离为新的操作。最后，用一个hook这些新操作的模板方法来代替这些不同的代码。
3. 控制子类扩展，模板方法只在特定点调用hook操作，这样就允许这些点进行扩展。

### 注意事项
1. 和策略模式不同，模板方法使用继承来改变算法的一部分，而策略模式使用委托来改变整个算法。