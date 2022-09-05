import Vue from "vue";
import router from "@polotik/router";
function responseErrorHandler(error) {
  const {
    status,
    data: { message },
  } = error.response;
  if (!status) {
    Vue.$toast.error("پیام خطا دریافت شد");
    return router.push("/404");
  }
  switch (status) {
    case 400:
      Vue.$toast.error("داده های ارسالی نا معتبر میباشد");
      break;
    case 401:
      router.push("/403");
      Vue.$toast.error("احراز هویت با خطا مواجه شد");
      break;
    case 403:
      router.push("/403");
      Vue.$toast.error("این سرویس از سطح دسترسی شما خارج است");
      break;
    case 404:
      router.push("/404");
      Vue.$toast.error("داده ارسالی یافت نشد");
    case 409:
      Vue.$toast.error("بارگذاری فایل با خطا مواجه شد");
      break;
    case 500:
      Vue.$toast.error("این امکان برای شما در دسترس نیست");
      break;
    case 422:
      Vue.$toast.error("احراز هویت با خطا مواجه شد");
      break;
    case 419:
      Vue.$toast.error("احراز هویت با خطا مواجه شد");
      break;
    default:
      Vue.$toast.error("پیام خطا دریافت شد");
      break;
  }
  return Promise.reject(message);
}
export default responseErrorHandler;
