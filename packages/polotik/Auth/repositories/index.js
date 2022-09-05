import DefaultClient from "@polotik/repositories/clients/default";
import UserClient from "@polotik/repositories/clients/user";
const Source = "/one-time-login";
export default {
  setPermission(payload) {
    return DefaultClient.post(Source, {
      token: payload,
    });
  },
  getDashboardData() {
    return UserClient.get("/dashboard");
  },
};
