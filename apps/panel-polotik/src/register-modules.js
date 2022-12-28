import router from "./router";
import store from "./store";
import { registerModules } from "@applets/commen/module-registeration/register-modules";
import auctionModule from "@applets/polotik/auction";
import tenderModule from "@applets/polotik/tender";
import AuthModule from "@applets/polotik/auth";
import barterModule from "@applets/polotik/barter";
import inquiryModule from "@applets/polotik/inquiry";
import homeModule from "@applets/polotik/home";
import saleModule from "@applets/polotik/sale";
import serviceModule from "@applets/polotik/service";

export const ModulesPolotik = registerModules(store, router, {
  auction: auctionModule,
  tender: tenderModule,
  barter: barterModule,
  inquiry: inquiryModule,
  auth: AuthModule,
  home: homeModule,
  sales: saleModule,
  service: serviceModule,
});
