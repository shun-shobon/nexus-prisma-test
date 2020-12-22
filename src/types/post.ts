import { objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.content();
    t.model.author();
    t.model.category();
    t.model.tags();
  },
});
