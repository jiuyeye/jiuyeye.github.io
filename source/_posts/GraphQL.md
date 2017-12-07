---
title: GraphQL 学习
date: 2017-11-05 15:20:28
tags: GraphQL
---
GraphQL 使用 Schema 来描述数据，并通过制定和实现 GraphQL 规范定义了支持 Schema 查询的 DSQL （Domain Specific Query Language，领域特定查询语言）。
<!-- more -->
## GraphQL组件构成构成

#### 类型系统（Type System）
可以将 GraphQL 的类型系统分为标量类型（Scalar Types，标量类型）和其他高级数据类型，标量类型即可以表示最细粒度数据结构的数据类型，可以和 JavaScript 的原始类型对应。GraphQL 规范目前规定支持的标量类型有：
1、Int：整数，对应 JavaScript 的 Number
2、Float：浮点数，对应 JavaScript 的 Number
3、String：字符串，对应 JavaScript 的 String
4、Boolean：布尔值，对应 JavaScript 的 Boolean
5、ID：ID 值，是一个序列化后值唯一的字符串，可以视作对应 ES 2015 新增的 Symbol
6、Object：对象
用于描述层级或者树形数据结构。对于树形数据结构来说，叶子字段的类型都是标量数据类型。几乎所有 GraphQL 类型都是对象类型。Object 类型有一个 name 字段，以及一个很重要的 fields 字段。fields 字段可以描述出一个完整的数据结构。例如一个表示地址数据结构的 GraphQL 对象为：
```code
const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
    street: { type: GraphQLString },
    number: { type: GraphQLInt },
    formatted: {
      type: GraphQLString,
      resolve(obj) {
        return obj.number + ' ' + obj.street
      }
    }
  }
});
```
7、Interface：接口
8、Union：联合
9、Enum：枚举
10、Input Object：输入对象
11、List：列表
12、Non-Null：不能为 Null
Non-Null 强制类型的值不能为 null，并且在请求出错时一定会报错。可以用于必须保证值不能为 null 的字段。例如数据库的行的 id 字段不能为 null：

#### 查询语言（Query Language）

#### 执行语义（Execution Semantics）
#### 静态验证（Static Validation）
#### 类型检查（Type Introspection）

[摘自:云栖社区](https://yq.aliyun.com/articles/8183)