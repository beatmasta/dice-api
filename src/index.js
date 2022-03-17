"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const UserResolver_1 = __importDefault(require("./resolvers/UserResolver"));
const BetResolver_1 = __importDefault(require("./resolvers/BetResolver"));
const type_graphql_1 = require("type-graphql");
const PORT = process.env.PORT || 4000;
async function bootstrap() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [
            UserResolver_1.default,
            BetResolver_1.default
        ]
    });
    const server = new apollo_server_1.ApolloServer({ schema });
    const bound = await server.listen(PORT);
    console.log(`Server is running, GraphQL Playground available at ${bound.url}`);
    return bound;
}
bootstrap();
//tsconfig
// "esModuleInterop": true,
// import 'reflect-metadata';
// import { GraphQLServer } from 'graphql-yoga';
// import { buildSchema } from 'type-graphql';
// import UserResolver from './resolvers/UserResolver';
// import BetResolver from './resolvers/BetResolver';
//
// async function bootstrap() {
//
//     const schema = await buildSchema({
//         resolvers: [UserResolver, BetResolver],
//         emitSchemaFile: true,
//     });
//
//     const server = new GraphQLServer({ schema });
//
//     server.start(() => console.log('Server is running on http://localhost:4000'));
//
// }
//
// bootstrap();
