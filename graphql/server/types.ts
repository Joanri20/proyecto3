import { gql } from 'apollo-server-micro';
import { providerTypes } from '@graphql/server/provider/types';
import { deviceTypes } from '@graphql/server/device/types';
import { userTypes } from '@graphql/server/user/types';
import { DocumentNode } from 'graphql';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [
  CommonTypes,
  providerTypes,
  deviceTypes,
  userTypes,
];

export { globalTypes };
