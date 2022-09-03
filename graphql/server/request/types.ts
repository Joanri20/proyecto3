import { gql } from 'apollo-server-micro';

const requestTypes = gql`
  type Request {
    id: ID!
    device: Device!
    reasons: String!
    status: String!
    comment: String!
    user: User!
  }

  input requestInput {
    deviceId: String
    reasons: String
    status: String
    comment: String
    userId: String
  }

  type Query {
    getRequests: [Request]
    getRequestById(id: ID!): Request
  }
  type Mutation {
    updateRequest(id: ID, data: requestInput): Request
    deleteRequest(id: ID): Request
    createRequest(data: requestInput): Request
  }
`;

export { requestTypes };
