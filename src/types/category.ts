import { objectType } from "nexus";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.posts({ ordering: true });
  },
});
