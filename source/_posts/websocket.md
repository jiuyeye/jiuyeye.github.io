---
title: WebSocket开发
date: 2016-01-22 22:57:11
tags: WebSocket
categories: WebSocket
---
WebSocket与TCP、HTTP的关系WebSocket与http协议一样都是基于TCP的，所以他们都是可靠的协议，Web开发者调用的WebSocket的send函数在browser的实现中最终都是通过TCP的系统接口进行传输的。
<!-- more -->
> WebSocket和Http协议一样都属于应用层的协议，那么他们之间有没有什么关系呢?答案是肯定的，WebSocket在建立握手连接时，数据是通过http协议传输的，但是在建立连接之后，真正的数据传输阶段是不需要http协议参与的。

### 一个 websocket 连接的建立过程如下:

| 分步      | 客户端     | 服务端  |
| ------------- |:-----------| :---------|
| 1 |客户端建立到服务器的 TCP 连接| |
| 2 |客户端请求将当前 TCP 连接用作 websocket| |
| 3 | |服务器收到请求, 同意并确认将此 TCP 连接用作 websocket |
| 4 |客户端收到确认, HTTP 协议通信结束| |
| 5 |双方使用 websocket 协议自由双向通信 | |
***
1.申请一个WebSocket对象
```javascript
var wsUri ="ws://echo.websocket.org/";
websocket = new WebSocket(wsUri);
//参数是需要连接的服务器端的地址，同http协议使用http://开头一样，WebSocket协议的URL使用ws://开头，另外安全的WebSocket协议使用wss://开头。
```
2.WebSocket对象一共支持四个消息 onopen, onmessage, onclose和onerror
```javascript
//当Browser和WebSocketServer连接成功后，会触发onopen消息;
//如果连接失败，发送、接收数据失败或者处理数据出现错误，browser会触发onerror消息;
//当Browser接收到WebSocketServer发送过来的数据时，就会触发onmessage消息，参数evt中包含server传输过来的数据;
//当Browser接收到WebSocketServer端发送的关闭连接请求时，就会触发onclose消息。
```

### WebSocket通讯详细解读：
1.打开握手
2.数据传递
3.关闭握手

### WebSocket的优点
a)、服务器与客户端之间交换的标头信息很小，大概只有2字节;
b)、客户端与服务器都可以主动传送数据给对方;
c)、不用频率创建TCP请求及销毁请求，减少网络带宽资源的占用，同时也节省服务器资源;