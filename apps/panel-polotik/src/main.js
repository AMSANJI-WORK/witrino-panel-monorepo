import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import toast from "./plugins/toast";
import num2persian from "./plugins/num.to.persian";
import datepiker from "./plugins/datepiker";
import "@commen/assets/styles/scss/base.scss";

import auctionModule from "@packages/polotik/auction";
import tenderModule from "@packages/polotik/tender";
import AuthModule from "@packages/polotik/auth";
import barterModule from "@packages/polotik/barter";
import inquiryModule from "@packages/polotik/inquiry";
import homeModule from "@packages/polotik/home";
import saleModule from "@packages/polotik/sale";
import serviceModule from "@packages/polotik/service";
import { registerModules } from "./register-modules";

registerModules({
  auction: auctionModule,
  tender: tenderModule,
  barter: barterModule,
  inquiry: inquiryModule,
  auth: AuthModule,
  home: homeModule,
  sale: saleModule,
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
