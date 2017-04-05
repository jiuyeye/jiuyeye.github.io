layout: post
title: react-JSX 语法
date: 2017-01-31 23:19:27
tags: react
---
>JSX——Javascript XML。基于ECMAScript的一种新特性，定义带属性树结构的语法。

<!--more-->
首字母大小写
嵌套
求职表达式
驼峰命名
htmlFor和className

### 语法
1. 注释
```javascript
var style={
    color:"#fff",
    border:"1px solid #ccc",
}
var HelloWorld = React.creatClass({
    render:function(){
        return:<p
        /*comment*/
        //comment
        >Hello world{
        /*
            comment
        */
        //comment
        }</p>;
    }
});
React.render(<div style={style}><HelloWorld></div>,document.body);
```
2.
```javascript
var style={
    color:"#fff",
    border:"1px solid #ccc",
}
var HelloWorld = React.creatClass({
    render:function(){
        return:<p>Hello {this.props.name?this.props.name : "world"}</p>;
    }
});
React.render(<div style={style}><HelloWorld name="jack"></div>,document.body);
```
3.
```javascript
var style={
    color:"#fff",
    border:"1px solid #ccc",
}
var HelloWorld = React.creatClass({
    getName:function(){
        if(this.props.name)
            return this.props.name
        else
            return "world"
    }
    render:function(){
        var name=this.getName();
        return:<p>Hello {name}</p>;
    }
});
React.render(<div style={style}><HelloWorld name="jack"></div>,document.body);
```
4. 函数表达式
```javascript
var style={
    color:"#fff",
    border:"1px solid #ccc",
}
var HelloWorld = React.creatClass({
    render:function(){
        var name=this.getName();
        return:<p>Hello {
            (function(obj){
                if(obj.props.name)
                    return obj.props.name
                else
                    return "world"
            })(this);
        }</p>;
    }
});
React.render(<div style={style}><HelloWorld name="jack"></div>,document.body);
```