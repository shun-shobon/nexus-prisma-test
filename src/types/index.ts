export * from "./user";
export * from "./post";
export * from "./category";
export * from "./tag";

import { queryType, mutationType } from "nexus";

export const query = queryType({
  definition(t) {
    t.crud.user();
    t.crud.users({ ordering: true });
    t.crud.post();
    t.crud.posts({ ordering: true });
    t.crud.category();
    t.crud.categories({ ordering: true });
    t.crud.tag();
    t.crud.tags({ ordering: true });
  }
});

export const mutation = mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.createOnePost();
    t.crud.createOneCategory();
    t.crud.createOneTag();
  }
})
