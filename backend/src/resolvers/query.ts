import { QueryResolvers } from "../__generated__/resolvers-types";

export const Query: QueryResolvers = {
  books: async (__, _, { prisma }) => {
    return await prisma.book.findMany();
  },
};

export default Query;
