const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        userId: {type: GraphQLInt},
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        body: {type: GraphQLString}   
    }   
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => response.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});