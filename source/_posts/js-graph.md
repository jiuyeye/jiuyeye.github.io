layout: post
title: 数据结构-图
date: 2014-04-12 21:12:03
categories: js
---
>图是网络结构的抽象模型，是由一组由边连接的节点。任何二元关系可以用图来表示。

<!-- more -->
### 图的表示

1.邻接矩阵，每个节点都和一个整数相关联，该整数将作为数组的索引。
2.邻接表，由图中每个顶点的相邻点列表所组成。
3.关联矩阵，矩阵的行表示顶点，列表示边。

### 创建图类

```javaScript
function Graph(){
  var vertices = [];
  var adjList = new Dictionary();
  this.addVertex = function(v){//添加新顶点
    vertices.push(v);
    adjList.set(v,[]);
  };
  this.addEdge = function(v,w){
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  }
  this.toString = function(){
    var s='';
    for(var i=0;i<vertices.length;i++){
      s += vertices[i] + '->';
      var neighbors = adjList.get(vertices[i]);
      for(var var j=0;j<neighbors.length;j++){
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  }
}
```

### 图的遍历
