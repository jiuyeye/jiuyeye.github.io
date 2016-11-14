layout: post
title: js-常用算法
date: 2016-11-13 23:41:26
tags: 算法
categories: js
---
将来当我们面对较为复杂的问题，这些基础知识的积累可以帮助我们更好的优化解决思路。下面罗列在前端面试中经常撞见的几个问题吧。
<!-- more -->
> 转自：www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/

Q1 判断一个单词是否是回文？
```javascript
function checkPalindrom(str) {  
    return str == str.split('').reverse().join('');
}
```
Q2 去掉一组整型数组重复的值
> 比如输入: [1,13,24,11,11,14,1,2] 
输出: [1,13,24,11,14,2]
需要去掉重复的11 和 1 这两个元素。

```javascript
let unique = function(arr) {  
  let hashTable = {};
  let data = [];
  for(let i=0,l=arr.length;i<l;i++) {
    if(!hashTable[arr[i]]) {
      hashTable[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  return data
}
module.exports = unique;
```

Q3 统计一个字符串出现最多的字母
> 输入 ： afjghdfraaaasdenas 
输出 ： a

```javascript

function findMaxDuplicateChar(str) {  
  if(str.length == 1) {
    return str;
  }
  let charObj = {};
  for(let i=0;i<str.length;i++) {
    if(!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)] = 1;
    }else{
      charObj[str.charAt(i)] += 1;
    }
  }
  let maxChar = '',
      maxValue = 1;
  for(var k in charObj) {
    if(charObj[k] >= maxValue) {
      maxChar = k;
      maxValue = charObj[k];
    }
  }
  return maxChar;
 
}
 
module.exports = findMaxDuplicateChar;
```

Q4 排序算法
```javascript
function bubbleSort(arr) {  
    for(let i = 0,l=arr.length;i<l-1;i++) {
        for(let j = i+1;j<l;j++) { 
          if(arr[i]>arr[j]) {
                let tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    return arr;
}
module.exports = bubbleSort;
```

Q10 使用JS 实现二叉查找树(Binary Search Tree)

一般叫全部写完的概率比较少，但是重点考察你对它的理解和一些基本特点的实现。 二叉查找树，也称二叉搜索树、有序二叉树（英语：ordered binary tree）是指一棵空树或者具有下列性质的二叉树：

任意节点的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
任意节点的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
任意节点的左、右子树也分别为二叉查找树；
没有键值相等的节点。二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低。为O(log n)。二叉查找树是基础性数据结构，用于构建更为抽象的数据结构，如集合、multiset、关联数组等。

```javascript
class Node {  
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
```
树是有节点构成，由根节点逐渐延生到各个子节点，因此它具备基本的结构就是具备一个根节点，具备添加，查找和删除节点的方法.
```javascript
class BinarySearchTree {
 
  constructor() {
    this.root = null;
  }
 
  insert(data) {
    let n = new Node(data, null, null);
    if (!this.root) {
      return this.root = n;
    }
    let currentNode = this.root;
    let parent = null;
    while (1) {
      parent = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        if (currentNode === null) {
          parent.left = n;
          break;
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
 
  remove(data) {
    this.root = this.removeNode(this.root, data)
  }
 
  removeNode(node, data) {
    if (node == null) {
      return null;
    }
 
    if (data == node.data) {
      // no children node
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
 
      let getSmallest = function(node) {
        if(node.left === null && node.right == null) {
          return node;
        }
        if(node.left != null) {
          return node.left;
        }
        if(node.right !== null) {
          return getSmallest(node.right);
        }
 
      }
      let temNode = getSmallest(node.right);
      node.data = temNode.data;
      node.right = this.removeNode(temNode.right,temNode.data);
      return node;
 
    } else if (data < node.data) {
      node.left = this.removeNode(node.left,data);
      return node;
    } else {
      node.right = this.removeNode(node.right,data);
      return node;
    }
  }
 
  find(data) {
    var current = this.root;
    while (current != null) {
      if (data == current.data) {
        break;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right
      }
    }
    return current.data;
  }
 
}
 
module.exports = BinarySearchTree;
```