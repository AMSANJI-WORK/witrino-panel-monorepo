import auth from "@applets/polotik/auth/repositories";
import home from "@applets/polotik/home/repositories";
import upload from "@applets/commen/upload/polotik/repositories";
import city from "./city";
import guilds from "./guilds";
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
