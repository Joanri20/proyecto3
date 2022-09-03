import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/provider/resolvers';
import { deviceResolvers } from '@graphql/server/device/resolvers';

const globalResolvers: Resolver[] = [model1Resolvers, deviceResolvers];

export { globalResolvers };
