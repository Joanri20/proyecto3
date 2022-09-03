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

  enum Enum_Status {
    New
    Accepted
    Rejected
  }

  input requestInput {
    deviceId: String
    reasons: String
    status: Enum_Status
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
