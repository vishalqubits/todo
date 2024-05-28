import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: "../frontend/client/gql/***/*.graphql",
  schema: "./schema.graphql",
  generates: {
    "./src/__generated__/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        contextType: "./context#MyContext",
      },
    },

    "../frontend/client/__client_generated__/apollo-hooks/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponents: false,
      },
    },

    "../frontend/client/__client_generated__/types/index.d.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
