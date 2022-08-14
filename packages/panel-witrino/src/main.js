import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import toast from "./plugins/toast";
import num2persian from "./plugins/num.to.persian";
import vueApexCharts from "./plugins/apex.chart";
import datepiker from "./plugins/datepiker";
import { lmap, lmarker, ltilelayer } from "./plugins/map";
import "./assets/scss/base.scss";

new Vue({
  lmap,
  toast,
  store,
  router,
  vuetify,
  lmarker,
  datepiker,
  ltilelayer,
  num2persian,
  vueApexCharts,
  render: (h) => h(App),
}).$mount("#app");
