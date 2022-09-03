import { Resolver } from 'types';
import { providerResolvers } from '@graphql/server/provider/resolvers';
import { deviceResolvers } from '@graphql/server/device/resolvers';
import { userResolvers } from '@graphql/server/user/resolvers';
import { requestResolvers } from '@graphql/server/request/resolvers';
import { companyResolvers } from '@graphql/server/company/resolvers';

const globalResolvers: Resolver[] = [
  providerResolvers,
  deviceResolvers,
  userResolvers,
  companyResolvers,
  requestResolvers,
];

export { globalResolvers };
