import { gql } from "apollo-server";

const typeDefs = gql`
  type Rocket {
    name: String!
  }
  type Query {
    rocket: [Rocket]
    hello: String!
  }
`;

export default typeDefs;
