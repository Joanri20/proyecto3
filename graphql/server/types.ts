import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { providerTypes } from '@graphql/server/provider/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [CommonTypes, providerTypes];

export { globalTypes };
