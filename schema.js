const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

let counter = 3;

const queryType = new GraphQLObjectType({
  name : 'RootQuery',
  fields : {
    hello : {
      type : GraphQLString,
      resolve : () => 'World'
    },
    counter : {
      type : GraphQLInt,
      resolve : () => counter++
    }
  }
});

const mySchema = new GraphQLSchema({
  query : queryType
});

module.exports = mySchema;