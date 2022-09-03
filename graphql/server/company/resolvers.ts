import { prisma } from '@config/prisma';
import { Resolver } from 'types';

const companyResolvers: Resolver = {

  Company:{
  users: async (parent, args) => {
    const users=await prisma.user.findMany({
      where: { companyId: {equals:parent.id} },
    });
    return users;
    },
  },
  Query: {
    getCompanies: async (parent, args) => {
      const company = await prisma.company.findMany();
      return company;
    },

    getCompany: async (parent, args) => {
      const company = await prisma.company.findUnique({
        where: { id: args.id },
      });
      return company;
    },
  },
  Mutation: {
    updateCompany: async (parent, args) => {
      const company = await prisma.company.update({
        where: { id: args.id },
        data: {
          name: { set: args.data.name },
          nit: { set: args.data.nit },
         
        },
      });
      return company;
    },

    deleteCompany: async (parent, args) => {
      const company = await prisma.company.delete({
        where: { id: args.id },
      });
      return company;
    },

    createCompany: async (parent, args) => {
      const company = await prisma.company.create({
        data: {
          name: args.data.name,
          nit: args.data.nit,
        },
      });
      return company;
    },
  },
};

export { companyResolvers };
