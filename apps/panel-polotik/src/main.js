import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import toast from "./plugins/toast";
import num2persian from "./plugins/num.to.persian";
import datepiker from "./plugins/datepiker";
import "@commen/assets/styles/scss/base.scss";

import auctionModule from "@applets/polotik/auction";
import tenderModule from "@applets/polotik/tender";
import AuthModule from "@applets/polotik/auth";
import barterModule from "@applets/polotik/barter";
import inquiryModule from "@applets/polotik/inquiry";
import homeModule from "@applets/polotik/home";
import saleModule from "@applets/polotik/sale";
import serviceModule from "@applets/polotik/service";
import { registerModules } from "./register-modules";

registerModules({
  auction: auctionModule,
  tender: tenderModule,
  barter: barterModule,
  inquiry: inquiryModule,
  auth: AuthModule,
  home: homeModule,
  sales: saleModule,
  service: serviceModule,
});

new Vue({
  toast,
  store,
  router,
  vuetify,
  datepiker,
  num2persian,
  render: (h) => h(App),
}).$mount("#app");
