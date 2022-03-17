import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import UserResolver from './resolvers/UserResolver';
import BetResolver from './resolvers/BetResolver';
import { buildSchema } from 'type-graphql';

require('./db/index');

const PORT = process.env.PORT || 4000;

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            BetResolver
        ]
    });

    const server = new ApolloServer({ schema });

    const bound = await server.listen(PORT);

    console.log(`Server is running, GraphQL Playground available at ${bound.url}`);

    return bound;

}

bootstrap();
