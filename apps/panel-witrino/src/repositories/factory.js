import shared from "@shared/repositories";
import base from './base';
import auth from "@applets/auth/src/repositories";
const repositories = new Map(
  Object.entries({
    ...shared,
    base,
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
