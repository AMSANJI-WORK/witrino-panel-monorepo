import UserClient from "@polotik/repositories/clients/user";
;
const Source = "/city";
export default {
  getAllCities() {
    return UserClient.get(`${Source}`);
  },
  getACity(id) {
    return UserClient.get(`${Source}/${id}`);
  },
};
