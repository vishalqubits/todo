// Note this "Resolvers" type isn't strictly necessary because we are already
// separately type checking our queries and resolvers. However, the "Resolvers"
// generated types is useful syntax if you are defining your resolvers

import Mutation from "./mutation";

import { Resolvers } from "../../../common/src/__generated__/apollo-server-resolvers-types";

// in a single file.
const resolvers: Resolvers = { Mutation };

export default resolvers;
