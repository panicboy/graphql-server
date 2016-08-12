const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// function, the actual executor of the schema
const {graphql} = require('graphql');

// the schema to execute
const mySchema = require('./schema');

// get query from cli arguments
// const query = process.argv[2];

// // execute mySchema against a query
// graphql(mySchema, query)
//   .then((data) => {
//     console.log('data: ', data);
//   });


app.get('/', (req,res) => {
  res.send('Hello world!');
});

app.get('/graphql', (req,res) => {
  const {query} = req.query;

  graphql(mySchema, query)
    .then((results) => {
      res.json(results);
    });
});

app.listen(PORT, () => {
  console.log(`Aerver listening on port ${PORT}`);
});