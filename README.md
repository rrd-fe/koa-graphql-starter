# koa-graphql-starter

GraphQL project boilerplate based on [Koa.js](https://koajs.com/), [TypeScript](https://www.typescriptlang.org/index.html) and [Apollo Server](https://github.com/apollographql/apollo-server)


We're using the official [apollo-server-koa](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-koa).


## Features

* Git commit message validation with [commitlint](https://github.com/conventional-changelog/commitlint) and [husky](https://github.com/typicode/husky)

* Support Modularizing Schema and Resolver by [merge-graphql-schemas](https://github.com/Urigo/merge-graphql-schemas)

## Demo App

To illustrate the result of this boilerplate, we are creating an online E-commerce App, which has the following entities: `Product`, `User`, `Order`. The schema definitions are like this:

```graphql
type Product {
    productId: ID!
    name: String!
    img: String!
    price: Int!
}
type User {
    userId: ID!
    name: String
    age: Int!
    orders: [Order]!
}
type Order {
    orderId: ID!
    product: Product!
    user: User!
    # the number of the product
    num: Int!
    createAt: Int
}
```

Following is `Query` and `Mutation`:

```graphql
Query {
    productList: [Product]!
    productDetail: Produce
    me: User
}
Mutation {
    login(name: String!, password: String)
    buy(productId: ID!, num: Int!): Order
}
```
