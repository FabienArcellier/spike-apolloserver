## implement a graphql service with Apollo Server with typescript

* [apollo server](https://www.apollographql.com/docs/apollo-server/getting-started/)

**Conclusion :**

## Getting started

### 1. Usage : use internal webserver of apollo server

1.1) install the local environment

```
npm install
```

1.2) run the webserver

```bash
npm run build
npm run start
```

1.3) run the graphql query

```bash
curl 'http://127.0.0.1:4000/' -H 'content-type: application/json' --data-binary '{"query":"{ user(name: \"fabien\") {name,age}}"}'
```

### 2. Development : generation of endpoint signature for React client

I can generate interface client with graphql endpoint.

### 3. Documentation : usage of apollo server

It's high quality documentation. The example are not too much simple and easy to try. 
The way the resolver are chained is well described.

### 3. Documentation : usage of apollo server in typescript

* the usage of apollo server in typescript is not cover in documentation. Only the development with react client is cover.

    I have tried to use domain object as User in typescript and the server in node. 
    I have got lot of error during the compilation. This part is not cover in documentation as well.

    To compile, I have to downgrade from graphql `15.0.0` to `14.6.0` and add the flag `esModuleInterop`. 
    That's look crap for me ... :(. That means the Continuous Integration process of some libraries doesn't handle typescript well.

### 4. Testability: check the validity of graphql schema

* `gql` instruction allow to check the validity of graphql schema (see [test_query.ts](src/query.test.ts))

### 4. Testability : internal mock library

Apollo server implements its own mocking library to test the front disconnected from anything.
I think this sort of things is gadget. We already have the signature validation through `apollo` cli.

### 4. Testability : ensure non regression through acceptance testing

Documentation about automatic testing is very light. As I don't succeed to plug the debugger on typescript, I am blind to understand the behavior.
The mecanisism of Snapshot is intrusive. You have to remove them by hand when you remove the assertion.

## The latest version

You can find the latest version to ...

```bash
git clone ...
```

## Code Example

5-line code snippet on how its used (if it's a library)

## Continuous integration

Provide code examples and explanations of how to get the project.

### Tests

Describe and show how to run the tests with code examples.
