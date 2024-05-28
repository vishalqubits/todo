import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { PrismaClient } from "@prisma/client";
import resolvers from "./resolvers/main";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });
const prisma = new PrismaClient();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    return {
      req,
      prisma,
    };
  },
});

console.log(`🚀 Server listening at: ${url}`);
