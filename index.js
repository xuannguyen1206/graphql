const express = require('express');
const app = express();
const {ApolloServer, gpl} = require('apollo-server');

const typeDefs = require('./schema');
const resolver = require('./resolver');

const server = new ApolloServer({ typeDefs, resolver });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });