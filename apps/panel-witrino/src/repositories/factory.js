import shared from "@shared/repositories";
import admin from "@admin/repositories";
import auth from "@auth/repositories";
const repositories = new Map(
  Object.entries({
    ...shared,
    admin,
    auth,
  })
);

export default {
  get(repositoryName) {
    if (repositories.has(repositoryName))
      return repositories.get(repositoryName);
    throw new Error("invalid repository name!");
  },
};
