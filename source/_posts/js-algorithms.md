layout: post
title: 算法补充学习
date: 2014-04-13 22:33:27
categories: js
---
>斐波那契数列、动态规划、贪心算法、大O表示法

<!-- more -->
### 斐波那契数列
1. 1和2斐波那契数是1；
2. n(n>2)的斐波那契数是(n-1)的斐波那契数加上(n-2)的斐波那契数。
```javascript
function fibonacci(num){//递归方式实现
  if(num === 1 || num === 2){
    return 1;
  }
  return fibonacci(num-1)+fibonacci(num-2);
}

function fib(num){
  var n1=1,
      n2=1,
      n=1;
  for(var i=3;i<=num;i++){
    n = n1+n2;
    n1=n2;
    n2=n;
  }
  return n;
}
```

### 动态规划

用动态规划解决问题，要遵循三个步骤：
1. 定义子问题；
2. 实现要反复执行而解决子问题的部分；
3. 识别并求解出边界条件；

用动态规划能解决的著名问题有：
1. 背包问题；
2. 最长公共子序列；
3. 矩阵链相乘；
4. 硬币找零；
5. 图的全源最短路径；

```javascript
function MinCoinChange(coins){
  var coins = coins;
  var cache = {};
  this.makeChange = function(amount){
    var me = this;
    if(!amount){
      retrun []''
    }
    if(vache[amount]){
      return cache[amount];
    }
    var min = [],newMin,newAmount;
    for(var i=0;i<coins.length;i++){
      var coin = coins[i];
      newAmount = amount - coin;
      if(newAmount >= 0){
        newAmount = me.makeChange(newAmount);
      }
      if(newAmount>=0 && (newMin.length<min.length-1 || !min.lenght) && (newMin.length || !newAmount)){
        min = [coin].concat(newMin);
        console.log('new Min' +min+'for'+amount);
      }
    }
  }
}
```

### 贪心算法
> 贪心算法遵循一种近似解决问题的技术，期盼通过每个阶段的局部最优选择，从而达到全局的最优。

```javascript
function MinCoinChange(coins){
  var coins = coins;
  this.makeChange = function(amount){
    var change = [],total = 0;
    for(var i=coins.lenggh;i>=0;i--){
      var coin = coins[i];
      while(total+coin <= amount){
        change.push(coin);
        total += coin;
      }
    }
    return change;
  }
}
```