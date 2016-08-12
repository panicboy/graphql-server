const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID
} = require('graphql');

const humps = require('humps');

const person = humps.camelizeKeys({
  id: 1,
  firstName: 'Andrew',
  lastName: 'Sasaki',
  email: 'asasaki@gmail.com',
  spouse_id: 2
});

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

const PersonType = new GraphQLObjectType({
  name : 'Person',
  fields : {
    id : {
      type : GraphQLID
    },
    firstName : {
      type : GraphQLString
    },
    lastName : {
      type : GraphQLString
    },
    email : {
      type : GraphQLString
    },
    spouse_id : {
      type : GraphQLInt
    }
  }

});


const queryType = new GraphQLObjectType({
  name : 'RootQuery',
  fields : {
    person : {
      type : PersonType,
      resolve : () => person
    }
  }
});



// const mutationType = new GraphQLObjectType({
//   name: 'RootMutation',
//   fields: {
//     incrementCounter: {
//       type: GraphQLInt,
//       resolve: () => ++counter
//     }
//   }
// });

const mySchema = new GraphQLSchema({
  query : queryType
});

module.exports = mySchema;