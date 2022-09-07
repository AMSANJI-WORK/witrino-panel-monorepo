import auth from "@packages/polotik/auth/repositories";
import home from "@packages/polotik/home/repositories";
import city from "./city";
import guilds from "./guilds";
import upload from "./upload";
const repositories = new Map(
  Object.entries({
    auth,
    guilds,
    upload,
    city,
    home,
  })
);

export default {
  get(repositoryName) {
    if (repositories.has(repositoryName))
      return repositories.get(repositoryName);
    throw new Error("invalid repository name!");
  },
};
