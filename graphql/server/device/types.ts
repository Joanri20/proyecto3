import { gql } from 'apollo-server-micro';

const deviceTypes = gql`
  type Device {
    id: ID
    name: String
    description: String
    brand: String
    amount: Int
    invoice: String
    provider: Provider
    deviceType: String
  }

  enum Enum_Type {
    Laptop
    Mouse
    Keyboard
    Monitor
    Heaphone
    Charger
    CellPhone
  }

  input deviceInput {
    name: String
    description: String
    brand: String
    amount: Int
    invoice: String
    providerId: String
    deviceType: Enum_Type
  }

  type Query {
    getDevices: [Device]
    getDevice(id: ID): Device
  }

  type Mutation {
    createDevice(data: deviceInput): Device
    updateDevice(id: ID, data: deviceInput): Device
    deleteDevice(id: ID): Device
  }
`;

export { deviceTypes };
