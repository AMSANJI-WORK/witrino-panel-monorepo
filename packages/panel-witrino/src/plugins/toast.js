import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  timeout: 5000,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  rtl: true,
  newestOnTop: true,
  icon: true,
  position: "top-left",
});
