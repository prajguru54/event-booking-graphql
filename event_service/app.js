const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const bodyParser = require("body-parser");
const { buildSchema } = require("graphql");

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

let schema = buildSchema(`

  type Query {
    events: [String!]!
  }
  type Mutation {
    createEvent(name:String):String!
  }
  
`);

let resolvers = {
    events: () => ["Coding", "Chess", "Movie"],
    createEvent: (args) => {
        const eventName = args.name;
        return eventName;
    },
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
    })
);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}/graphql`);
});
