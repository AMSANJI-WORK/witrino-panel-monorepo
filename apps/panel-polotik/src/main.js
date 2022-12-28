import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import toast from "./plugins/toast";
import num2persian from "./plugins/num.to.persian";
import datepiker from "./plugins/datepiker";
import "@applets/commen/assets/styles/scss/base.scss";
import { ModulesPolotik } from "./register-modules";

new Vue({
  toast,
  store,
  router,
  vuetify,
  datepiker,
  num2persian,
  ModulesPolotik,
  render: (h) => h(App),
}).$mount("#app");
