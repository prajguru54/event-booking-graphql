const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const bodyParser = require("body-parser");
const { buildSchema } = require("graphql");
const {schema} = require('./schema')
const resolvers = require('./resolvers')

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use(
    "/graphql",
    graphqlHTTP({
        schema: buildSchema(schema),
        rootValue: resolvers,
        graphiql: true,
    })
);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}/graphql`);
});
