import store from "@witrino/store";
import Cookies from "js-cookie";
export function profilePrevPath(from) {
  let activeLayout =
    from.matched[1]?.path.substring(1) ?? Cookies.get("from-path");
  Cookies.set("from-path", activeLayout);
  store.commit("shared/profile/SET_FROM_PATH", activeLayout);
}
