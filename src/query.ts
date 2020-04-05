import { DocumentNode } from 'graphql';
import User from './domain/user';
import { gql } from 'apollo-server';

export class Query {

    constructor() {

    }

    typedefs(): DocumentNode {
      return gql`
        type Query {
          user(name: String, age: Int): User
        }
    
        type User {
          name: String
          age: Int
        }`
    }

    resolvers(): any {
        return {
            Query: {
              user: resolve_user,
            },
            User : {
              name: resolve_name,
              age: resolve_age,
            }
        };
    }
}

var resolve_user = (parent: any, args: any, context: any, info: any) : User => {
  return new User(args['name'], args['age'])
}

var resolve_name =  (parent: any, args: any, context: any, info: any) : string => {
  var name = parent['name']
  return `My name is ${name} !`
}

var resolve_age =  (parent: any, args: any, context: any, info: any) : number => {
  return parent['age']
}