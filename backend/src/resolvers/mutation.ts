import { MutationResolvers } from "../__generated__/resolvers-types";

// Use the generated `MutationResolvers` type to type check our mutations!
export const Mutation: MutationResolvers = {
  addBook: async (_, { input }, { prisma }) => {
    await prisma.book.create({
      data: {
        title: input.title,
        author: input.author,
      },
    });
    return {
      success: true,
      message: "Successfully book added",
    };
  },
};

export default Mutation;
