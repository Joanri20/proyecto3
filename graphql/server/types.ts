import { gql } from 'apollo-server-micro';
import { providerTypes } from '@graphql/server/provider/types';
import { deviceTypes } from '@graphql/server/device/types';

const CommonTypes = gql`
  scalar Date
`; 

const globalTypes: DocumentNode[] = [CommonTypes, providerTypes, deviceTypes];

export { providerTypes };
