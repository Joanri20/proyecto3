import { gql } from 'apollo-server-micro';
import { providerTypes } from '@graphql/server/provider/types';
import { deviceTypes } from '@graphql/server/device/types';
import { userTypes } from '@graphql/server/user/types';
import { companyTypes } from '@graphql/server/company/types';
import { requestTypes } from '@graphql/server/request/types';
import { DocumentNode } from 'graphql';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [
  CommonTypes,
  providerTypes,
  deviceTypes,
  userTypes,
  companyTypes,
  requestTypes,
];

export { globalTypes };
