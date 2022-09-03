import { Resolver } from 'types';
import { providerResolvers } from '@graphql/server/provider/resolvers';
import { deviceResolvers } from '@graphql/server/device/resolvers';
import { userResolvers } from '@graphql/server/user/resolvers';

const globalResolvers: Resolver[] = [
  providerResolvers,
  deviceResolvers,
  userResolvers,
];

export { globalResolvers };
