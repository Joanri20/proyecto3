import { gql } from 'apollo-server-micro';

const providerTypes = gql`
  type Provider {
    id: ID!
    name: String!
    nit: String!
    phoneNumber: String!
    email: String
    devices: [Device]
  }

  input providerInput {
    name: String
    nit: String
    phoneNumber: String
    email: String
  }

  type Query {
    getProviders: [Provider]
    getProviderById(id: ID!): Provider
  }
  type Mutation {
    updateProvider(id: ID, data: providerInput): Provider
    deleteProvider(id: ID): Provider
    createProvider(data: providerInput): Provider
  }
`;

export { providerTypes };
