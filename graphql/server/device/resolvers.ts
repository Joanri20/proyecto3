import { prisma } from '@config/prisma';
import { Resolver } from 'types';

const deviceResolvers: Resolver = {
  Device: {
    provider: async (parent, args) => {
      const provider = await prisma.provider.findFirst({
        where: {
          id: {
            equals: parent.providerId,
          },
        },
      });
      return provider;
    },
    users: async (parent, args) => {
      const users = await prisma.user.findMany({
        where: {
          devices: {
            some: {
              id: {
                equals: parent.id,
              },
            },
          },
        },
      });
      return users;
    },
  },
  Query: {
    getDevices: async (parent, args) => {
      const device = await prisma.device.findMany();
      return device;
    },

    getDevice: async (parent, args) => {
      const device = await prisma.device.findUnique({
        where: { id: args.id },
      });
      return device;
    },
  },
  Mutation: {
    updateDevice: async (parent, args) => {
      const device = await prisma.device.update({
        where: { id: args.id },
        data: {
          name: { set: args.data.name },
          description: { set: args.data.description },
          brand: { set: args.data.brand },
          amount: { set: args.data.amount },
          invoice: { set: args.data.invoice },
          providerId: { set: args.data.providerId },
          deviceType: { set: args.data.deviceType },
        },
      });
      return device;
    },

    deleteDevice: async (parent, args) => {
      const device = await prisma.device.delete({
        where: { id: args.id },
      });
      return device;
    },

    createDevice: async (parent, args) => {
      const device = await prisma.device.create({
        data: {
          name: args.data.name,
          description: args.data.description,
          brand: args.data.brand,
          amount: args.data.amount,
          invoice: args.data.invoice,
          provider: {
            connect: {
              id: args.data.providerId,
            },
          },
          deviceType: args.data.deviceType,
        },
      });
      return device;
    },
  },
};

export { deviceResolvers };
