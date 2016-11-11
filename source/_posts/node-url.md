layout: post
title: node-Url模块
date: 2015-08-10 23:27:00
categories: node
---

nodejs URL模块操作URL相关方法

<!-- more -->
```javascript
url
{ parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  Url: [Function: Url]
}
```

1.parse
===
将一个URL字符串转换成对象并返回。
> url.parse(urlStr, [parseQueryString], [slashesDenoteHost])

| 接收参数      |      |
| :------------- |:-----------|
| urlStr      | url字符串      |
| parseQueryString   | 为true时将使用查询模块分析查询字符串，默认为false   |
| slashesDenoteHost  | 默认为false，`//foo/bar`形式的字符串将被解释成{pathname: ‘//foo/bar'} 如果设置成true，`//foo/bar` 形式的字符串将被解释成  { host: ‘foo', pathname: ‘/bar' }      |


//例：
```javascript
url.parse('http://localhost:4000/node-url/?search=ddd#hashname')
url {
	protocol: 'http:',//请求协议
	slashes: true,
	auth: null,//URL中身份验证信息部分
	host: 'localhost:4000', //URL主机名已全部转换成小写, 包括端口信息
	port: '4000',//主机的端口号部分
	hostname: 'localhost',//主机的主机名部分, 已转换成小写
	hash: '#hashname',//URL 的 “#” 后面部分（包括 # 符号）
	search: '?search=ddd',//URL 的“查询字符串”部分，包括开头的问号。
	query: 'search=ddd',//参数部分（问号后面部分字符串）或者使用querystring.parse() 解析后返回的对象。
	pathname: '/node-url/',//URL的路径部分,位于主机名之后请求查询之前
	path: '/node-url/?search=ddd',//pathname 和 search 连在一起。
	href: 'http://localhost:4000/node-url/?search=ddd#hashname'
}
```

2.format方法允许将一个URL对象转换为URL字符串
===

>url.format(urlObj)

| 接收参数      |      |
| :------------- |:-----------|
| urlObj      | 表示URL对象 |

//例：
```javascript
url.format({
	protocol:'https:',
	host:'localhost',
	pathname:'node',
	hash:'hashname'
})
'https://localhost/node#hashname'
```

3.resolve方法可以用于拼接URL
===
>url.resolve(from, to)

| 接收参数      |      |
| :------------- |:-----------|
| from      | 源地址     |
| to      | 需要添加或替换的标签     |

//例：
```javascript
	url.resolve('/web/js', 'node')
	'/web/node'
```
```javascript
	url.resolve('https://localhost/js', 'node')
	'https://localhost/node'
```
```javascript
	url.resolve('https://localhost', 'node')
	'https://localhost/node'
```
