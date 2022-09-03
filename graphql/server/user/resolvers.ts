import { prisma } from '@config/prisma';
import { Resolver } from 'types';

const userResolvers: Resolver = {
  User: {
    devices: async (parent, args) => {
      const devices = await prisma.device.findMany({
        where: {
          User: {
            some: {
              id: {
                equals: parent.id,
              },
            },
          },
        },
      });
      return devices;
    },
  },

  Query: {
    getUsers: async (parent, args) => {
      const user = await prisma.user.findMany();
      return user;
    },

    getUserById: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: { id: args.id },
      });
      return user;
    },
  },

  Mutation: {
    updateUser: async (parent, args) => {
      const user = await prisma.user.update({
        where: { id: args.id },
        data: {
          name: { set: args.data.name },
          lastName: { set: args.data.lastName },
          dni: { set: args.data.dni },
          phoneNumber: { set: args.data.phoneNumber },
          companyId: { set: args.data.companyId },
          role: { set: args.data.role },
        },
      });
      return user;
    },

    deleteUser: async (parent, args) => {
      const user = await prisma.user.delete({
        where: { id: args.id },
      });
      return user;
    },

    createUser: async (parent, args) => {
      const user = await prisma.user.create({
        data: {
          name: args.data.name,
          lastName: args.data.lastName,
          dni: args.data.dni,
          phoneNumber: args.data.phoneNumber,
          company: {
            connect: { id: args.data.companyId },
          },
          role: args.data.role,
        },
      });
      return user;
    },
  },
};

export { userResolvers };
