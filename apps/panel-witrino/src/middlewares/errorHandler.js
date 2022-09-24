import Vue from "vue";
import router from "@witrino/router";
import store from "@witrino/store";
function responseErrorHandler(error) {
  if (!error.response) return Vue.$toast.error("خطا در برقراری ارتباط با سرور");
  const { status, data } = error.response;
  switch (status) {
    case 401:
      if (router.currentRoute.path.includes("auth"))
        store.dispatch("shared/message/SHOW_ERROR_MESSAGES", data);
      else store.dispatch("auth/refreshtoken/AUTH_REFRSH_TOKEN_ASYNC");
      break;
    case 403:
      store.dispatch("shared/message/SHOW_ERROR_MESSAGES", data);
      break;
    case 404:
      store.dispatch("shared/message/SHOW_ERROR_MESSAGES", { message: null });
      break;
    case 500:
      Vue.$toast.error("خطای داخلی سرور");
      break;
    default:
      store.dispatch("shared/message/SHOW_ERROR_MESSAGES", data);
      break;
  }
  return Promise.reject(error.response?.data);
}
export default responseErrorHandler;
