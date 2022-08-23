import UserClient from "@polotik/repositories/clients/user";
const Source = "/guilds";
const POINT = "category";
export default {
  getAllCategories(TARGET) {
    return UserClient.get(`${Source}/${TARGET}/${POINT}`);
  },
  getACategory(TARGET, id) {
    return UserClient.get(`${Source}/${TARGET}/${POINT}/${id}`);
  },
};
