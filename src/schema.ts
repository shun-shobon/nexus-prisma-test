import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import * as types from "./types";
import { join, resolve } from "path";

export const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      outputs: {
        typegen: resolve("node_modules", "@types", "nexus-prisma-types", "index.d.ts"),
      }
    })
  ],
  contextType: {
    module: require.resolve("./context.ts"),
    export: "Context",
  },
  outputs: {
    typegen: resolve("node_modules", "@types", "nexus-types", "index.d.ts"),
    schema: resolve("schema.graphql"),
  },
})
