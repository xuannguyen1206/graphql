const { gql } = require('apollo-server');
const typeDefs = gql`
    type rocket{
        name: String!
    }
    type Query{
      rocket: [rocket],
      hello: String!
    }
`;

module.exports = typeDefs;