import UserClient from "@polotik/repositories/clients/user";
const Source = "units";
export default {
  getAllUnits() {
    return UserClient.get(Source);
  },
  // getAUnit(id) {
  //   return UserClient.get();
  // },
};
