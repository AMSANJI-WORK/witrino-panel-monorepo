import upload from "@packages/polotik/Upload/store";
import auth from "@packages/polotik/Auth/store";
import loading from "@shared/store/modules/loading";
import guilds from "./guilds";
export default {
  guilds,
  upload,
  auth,
  shared: {
    namespaced: true,
    loading,
  },
};
