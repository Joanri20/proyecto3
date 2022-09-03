import { gql } from 'apollo-server-micro';

const companyTypes = gql`
  type Company {
    id: ID
    name: String
    nit: String
    users: [User]
  }

  input companyInput {
    name: String
    nit: String
   
  }

  type Query {
    getCompanies: [Company]
    getCompany(id: ID): Company
  }

  type Mutation {
    createCompany(data: companyInput): Company
    updateCompany(id: ID, data: companyInput): Company
    deleteCompany(id: ID): Company
  }
`;

export { companyTypes };
