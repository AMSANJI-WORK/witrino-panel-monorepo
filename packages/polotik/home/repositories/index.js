import UserClient from "@polotik/repositories/clients/user";
const Source = "/dashboard";
export default {
  getDashboardData() {
    return UserClient.get(Source);
  },
};
