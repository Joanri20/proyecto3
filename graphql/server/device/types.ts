import { gql } from 'apollo-server-micro';

const deviceTypes = gql`
    type Provider {
        id: ID!
        deviceType: Enun_Type!
        name: String!
        description: String!
        brand: String!
        providerId: String!
        provider: Provider!
        amount: Int!
        invoice: String!
        Request: Request[]!
        user: User!
        createdAt: DateTime!
        updatedAt: DateTime!
  }

  type Query {
    mockModelGetter: [Device]
  }
  type Mutation {
    mockModelSetter(name: String!,nit: String!, phoneNumber: String!, email: String!, device: Device[]!): Provider
  }
`;

export { deviceTypes };
