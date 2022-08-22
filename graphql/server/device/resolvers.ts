import { Resolver } from 'types';

const deviceResolvers: Resolver = {
  Query: {
    mockModelGetter: async (parent, args) => {
      return [
        { id: 1, name: 'test', description: 'test' },
        { id: 2, name: 'test', description: 'test' },
        { id: 3, name: 'test', description: 'test' },
      ];
    },
  },
  Mutation: {},
};

export { deviceResolvers };
