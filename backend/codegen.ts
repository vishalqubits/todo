import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  // generates: {
  //   "./src/__generated__/resolvers-types.ts": {
  //     plugins: ["typescript", "typescript-resolvers"],
  //   },
  generates: {
    "../common/src/__generated__/apollo-server-resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
