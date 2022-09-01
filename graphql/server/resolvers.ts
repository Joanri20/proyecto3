import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/provider/resolvers';

const globalResolvers: Resolver[] = [model1Resolvers];

export { globalResolvers };
