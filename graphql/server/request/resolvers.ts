import { prisma } from '@config/prisma';
import { Resolver } from 'types';

const requestResolvers: Resolver = {
  Request: {
    device: async (parent, args) => {
      const device = await prisma.device.findFirst({
        where: {
          id: {
            equals: parent.deviceId,
          },
        },
      });
      return device;
    },
    user: async (parent, args) => {
      const user = await prisma.user.findFirst({
        where: {
          id: {
            equals: parent.userId,
          },
        },
      });
      return user;
    },
  },

  Query: {
    getRequests: async (parent, args) => {
      const request = await prisma.request.findMany();
      return request;
    },

    getRequestById: async (parent, args) => {
      const request = await prisma.request.findUnique({
        where: { id: args.id },
      });
      return request;
    },
  },

  Mutation: {
    updateRequest: async (parent, args) => {
      const request = await prisma.request.update({
        where: { id: args.id },
        data: {
          deviceId: { set: args.data.deviceId },
          reasons: { set: args.data.reasons },
          status: { set: args.data.status },
          comment: { set: args.data.comment },
          userId: { set: args.data.userId },
        },
      });
      return request;
    },

    deleteRequest: async (parent, args) => {
      /* await prisma.device.deleteMany({
        where:{
          requestId: args.id,
        }
      }); 
      // Metodo opcional, por si no se puede borrado en cascada */
      const request = await prisma.request.delete({
        where: { id: args.id },
      });
      return request;
    },

    createRequest: async (parent, args) => {
      const request = await prisma.request.create({
        data: {
          deviceId: args.data.deviceId,
          reasons: args.data.reasons,
          status: args.data.status,
          comment: args.data.comment,
          userId: args.data.userId,
        },
      });
      return request;
    },
  },
};

export { requestResolvers };
