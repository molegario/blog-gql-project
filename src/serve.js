import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true, // Enable GraphiQL interface for testing queries
}));

console.log('starting server..');

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});
