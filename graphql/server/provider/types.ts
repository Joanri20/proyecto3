import { gql } from 'apollo-server-micro';

const providerTypes = gql`
    type Provider {
        id: ID!
        name: String!
        nit: String!
        phoneNumber: String!
        email: String!
        device: Device[]!
        createdAt: DateTime!
        updatedAt: DateTime!
  }

  type Query {
    mockModelGetter: [Provider]
  }
  type Mutation {
    mockModelSetter(name: String!,nit: String!, phoneNumber: String!, email: String!, device: Device[]!): Provider
  }
`;

export { providerTypes };
