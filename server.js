const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const port = 5000;

app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true
}));

app.listen(port,() => {
    console.log(`{^_^}/ SERVER ITS OK ON ${port}`);
});