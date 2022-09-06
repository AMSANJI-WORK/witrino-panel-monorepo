import upload from "@packages/polotik/upload/store";
import auth from "@packages/polotik/auth/store";
import home from "@packages/polotik/home/store";
import loading from "@polotik/modules/loading/store";
import pagination from "@commen/pagination/polotik/store";
import guilds from "./guilds";
export default {
  pagination,
  loading,
  guilds,
  upload,
  auth,
  home,
};
