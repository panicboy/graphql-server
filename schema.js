const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

let counter = 3;
let counters = [42, 43];

const queryType = new GraphQLObjectType({
  name : 'RootQuery',
  fields : {
    hello : {
      type : GraphQLString,
      resolve : () => 'World'
    },
    counter : {
      type : GraphQLInt,
      resolve : () => counter
    },
    counters : {
      type : new GraphQLList(GraphQLInt),
      resolve : () => counters
    }
  }
});

const mutationType = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    incrementCounter: {
      type: GraphQLInt,
      resolve: () => ++counter
    }
  }
});

const mySchema = new GraphQLSchema({
  query : queryType,
  mutation : mutationType
});

module.exports = mySchema;