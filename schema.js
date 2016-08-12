const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID
} = require('graphql');

let counter = 3;
let counters = [42, 43];
let counterObj = {
  id : 55,
  value : 42
};
let countersObj = [
  { id : 550,
    value : 43
  },
  { id : 551,
    value : 44
  }
];

const CounterObjType = new GraphQLObjectType({
  name : 'CounterObj',
  fields : {
    id : {
      type : GraphQLID
    },
    value : {
      type : GraphQLInt
    }
  }
});


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
    },
    counterObj: {
      type: CounterObjType,
      resolve: () => counterObj
    },
    countersObj: {
      type: new GraphQLList(CounterObjType),
      resolve: () => countersObj
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