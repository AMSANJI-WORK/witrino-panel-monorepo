import store from "@witrino/store";
import router from "@witrino/router";
import { AUTH_LOGOUT } from "@auth/store/modules/logout/types";
const clearToken = (to, from, next) => {
  store.dispatch(`auth/logout/${AUTH_LOGOUT}`);
  router.push("/auth");
  next();
};
export { clearToken };
