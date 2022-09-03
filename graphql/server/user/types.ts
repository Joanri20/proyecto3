import { gql } from 'apollo-server-micro';

const userTypes = gql`
  type User {
    id: ID!
    name: String!
    lastName: String!
    dni: String!
    phoneNumber: String!
    role: String!
    devices: [Device!]
  }
  enum Enum_Role {
    Employee
    Admin
  }
  input userInput {
    name: String
    lastName: String
    dni: String
    phoneNumber: String
    companyId: String
    role: Enum_Role
  }

  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }
  type Mutation {
    updateUser(id: ID, data: userInput): User
    deleteUser(id: ID): User
    createUser(data: userInput): User
  }
`;

export { userTypes };
