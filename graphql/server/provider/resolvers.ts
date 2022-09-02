import { prisma } from '@config/prisma';
import { Id } from 'react-toastify';
import { Resolver } from 'types';

const model1Resolvers: Resolver = {
  Provider: {
    devices: async (parent, args) => {
      const devices = await prisma.device.findMany({
        where: {
          providerId: {
            equals: parent.id,
          },
        },
      });
      return devices;
    },
  },

  Query: {
    getProviders: async (parent, args) => {
      const provider = await prisma.provider.findMany();
      return provider;
    },

    getProviderById: async (parent, args) => {
      const provider = await prisma.provider.findUnique({
        where: { id: args.id },
      });
      return provider;
    },
  },

  Mutation: {
    updateProvider: async (parent, args) => {
      const provider = await prisma.provider.update({
        where: { id: args.id },
        data: {
          name: { set: args.data.name },
          nit: { set: args.data.nit },
          phoneNumber: { set: args.data.phoneNumber },
          email: { set: args.data.email },
        },
      });
      return provider;
    },

    deleteProvider: async (parent, args) => {
      /*await prisma.device.deleteMany({
        where:{
          providerId: args.id,
        }
      });*/
      //Metodo opcional, por si no se puede borrado en cascada
      const provider = await prisma.provider.delete({
        where: { id: args.id },
      });
      return provider;
    },

    createProvider: async (parent, args) => {
      const provider = await prisma.provider.create({
        data: {
          name: args.data.name,
          nit: args.data.nit,
          phoneNumber: args.data.phoneNumber,
          email: args.data.email,
        },
      });
      return provider;
    },
  },
};

export { model1Resolvers };

